import { CommonModule } from '@angular/common';
import { Component, effect, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { TASK_PRIORITIES, TASK_STATUSES, Task } from '../../models/interfaces/task.model';
import { I18nService } from '../../services/i18n.service';
import { TaskPayload } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  private readonly fb = inject(FormBuilder);
  readonly i18n = inject(I18nService);

  readonly task = input<Task | null>(null);
  readonly cancel = output<void>();
  readonly save = output<TaskPayload>();

  readonly priorities = TASK_PRIORITIES;
  readonly statuses = TASK_STATUSES;

  readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.maxLength(80)]],
    description: ['', [Validators.required, Validators.maxLength(300)]],
    status: this.fb.nonNullable.control<Task['status']>('pending', [Validators.required]),
    priority: this.fb.nonNullable.control<Task['priority']>('medium', [Validators.required]),
    dueDate: ['', [Validators.required]],
  });

  constructor() {
    effect(() => {
      const currentTask = this.task();

      if (!currentTask) {
        this.form.reset({
          title: '',
          description: '',
          status: 'pending',
          priority: 'medium',
          dueDate: '',
        });
        return;
      }

      this.form.reset({
        title: currentTask.title,
        description: currentTask.description,
        status: currentTask.status,
        priority: currentTask.priority,
        dueDate: currentTask.dueDate,
      });
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.save.emit(this.form.getRawValue());
  }

  statusLabel(status: Task['status']): string {
    if (status === 'pending') {
      return this.i18n.t('statusPending');
    }
    if (status === 'in-progress') {
      return this.i18n.t('statusInProgress');
    }
    return this.i18n.t('statusCompleted');
  }

  priorityLabel(priority: Task['priority']): string {
    if (priority === 'low') {
      return this.i18n.t('priorityLow');
    }
    if (priority === 'medium') {
      return this.i18n.t('priorityMedium');
    }
    return this.i18n.t('priorityHigh');
  }
}
