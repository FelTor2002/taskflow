import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Task, TaskPriority, TaskStatus } from '../../models/interfaces/task.model';
import { I18nService } from '../../services/i18n.service';

export type TaskSort = 'createdAt-desc' | 'createdAt-asc' | 'dueDate-asc' | 'dueDate-desc';

export interface TaskFilterState {
  search: string;
  status: TaskStatus | 'all';
  priority: TaskPriority | 'all';
  sort: TaskSort;
}

@Component({
  selector: 'app-task-filters',
  imports: [FormsModule],
  templateUrl: './task-filters.component.html',
  styleUrl: './task-filters.component.css',
})
export class TaskFiltersComponent {
  readonly i18n = inject(I18nService);
  readonly state = input.required<TaskFilterState>();
  readonly stateChange = output<TaskFilterState>();

  onSearchChange(search: string): void {
    this.stateChange.emit({
      ...this.state(),
      search,
    });
  }

  onStatusChange(status: TaskFilterState['status']): void {
    this.stateChange.emit({
      ...this.state(),
      status,
    });
  }

  onPriorityChange(priority: TaskFilterState['priority']): void {
    this.stateChange.emit({
      ...this.state(),
      priority,
    });
  }

  onSortChange(sort: TaskSort): void {
    this.stateChange.emit({
      ...this.state(),
      sort,
    });
  }

  resetFilters(): void {
    this.stateChange.emit({
      search: '',
      status: 'all',
      priority: 'all',
      sort: 'createdAt-desc',
    });
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
