import { DatePipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';

import { Task } from '../../models/interfaces/task.model';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-task-card',
  imports: [DatePipe],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  readonly i18n = inject(I18nService);
  readonly task = input.required<Task>();
  readonly edit = output<string>();
  readonly remove = output<string>();
  readonly toggleCompleted = output<string>();

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
