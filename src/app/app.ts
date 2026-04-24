import { Component, computed, inject, signal } from '@angular/core';

import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFiltersComponent, TaskFilterState } from './components/task-filters/task-filters.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { Language } from './i18n/translations';
import { Task } from './models/interfaces/task.model';
import { I18nService } from './services/i18n.service';
import { TaskPayload, TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskCardComponent, TaskFiltersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly taskService = inject(TaskService);
  readonly i18n = inject(I18nService);

  readonly selectedTaskId = signal<string | null>(null);
  readonly isTaskModalOpen = signal(false);
  readonly filters = signal<TaskFilterState>({
    search: '',
    status: 'all',
    priority: 'all',
    sort: 'createdAt-desc',
  });
  readonly tasks = this.taskService.tasks;

  readonly selectedTask = computed(() =>
    this.tasks().find((task) => task.id === this.selectedTaskId()) ?? null,
  );
  readonly visibleTasks = computed(() => {
    const filters = this.filters();
    const search = filters.search.trim().toLowerCase();

    const filtered = this.tasks().filter((task) => {
      const matchesSearch =
        search.length === 0 ||
        task.title.toLowerCase().includes(search) ||
        task.description.toLowerCase().includes(search);

      const matchesStatus = filters.status === 'all' || task.status === filters.status;
      const matchesPriority = filters.priority === 'all' || task.priority === filters.priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });

    return filtered.sort((taskA, taskB) => {
      if (filters.sort === 'createdAt-desc') {
        return Date.parse(taskB.createdAt) - Date.parse(taskA.createdAt);
      }
      if (filters.sort === 'createdAt-asc') {
        return Date.parse(taskA.createdAt) - Date.parse(taskB.createdAt);
      }
      if (filters.sort === 'dueDate-asc') {
        return Date.parse(taskA.dueDate) - Date.parse(taskB.dueDate);
      }

      return Date.parse(taskB.dueDate) - Date.parse(taskA.dueDate);
    });
  });

  saveTask(payload: TaskPayload): void {
    const taskId = this.selectedTaskId();
    if (taskId) {
      this.taskService.updateTask(taskId, payload);
    } else {
      this.taskService.addTask(payload);
    }

    this.closeTaskModal();
  }

  editTask(taskId: string): void {
    this.selectedTaskId.set(taskId);
    this.isTaskModalOpen.set(true);
  }

  openCreateTaskModal(): void {
    this.selectedTaskId.set(null);
    this.isTaskModalOpen.set(true);
  }

  closeTaskModal(): void {
    this.isTaskModalOpen.set(false);
    this.selectedTaskId.set(null);
  }

  deleteTask(task: Task): void {
    const shouldDelete = confirm(`${this.i18n.t('confirmDelete')} "${task.title}"`);
    if (!shouldDelete) {
      return;
    }

    this.taskService.deleteTask(task.id);
    if (this.selectedTaskId() === task.id) {
      this.closeTaskModal();
    }
  }

  toggleTaskCompletion(taskId: string): void {
    this.taskService.toggleCompleted(taskId);
  }

  updateFilters(state: TaskFilterState): void {
    this.filters.set(state);
  }

  setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }
}
