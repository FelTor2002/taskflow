import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskPriority, TaskStatus } from '../../models/interfaces/task.model';

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
}
