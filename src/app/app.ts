import { Component, computed, inject, signal } from '@angular/core';

import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { Task } from './models/interfaces/task.model';
import { TaskPayload, TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly taskService = inject(TaskService);

  readonly selectedTaskId = signal<string | null>(null);
  readonly tasks = this.taskService.tasks;

  readonly selectedTask = computed(() =>
    this.tasks().find((task) => task.id === this.selectedTaskId()) ?? null,
  );

  saveTask(payload: TaskPayload): void {
    const taskId = this.selectedTaskId();
    if (taskId) {
      this.taskService.updateTask(taskId, payload);
      this.selectedTaskId.set(null);
      return;
    }

    this.taskService.addTask(payload);
  }

  editTask(taskId: string): void {
    this.selectedTaskId.set(taskId);
  }

  cancelEdit(): void {
    this.selectedTaskId.set(null);
  }

  deleteTask(task: Task): void {
    const shouldDelete = confirm(`Delete "${task.title}"?`);
    if (!shouldDelete) {
      return;
    }

    this.taskService.deleteTask(task.id);
    if (this.selectedTaskId() === task.id) {
      this.selectedTaskId.set(null);
    }
  }

  toggleTaskCompletion(taskId: string): void {
    this.taskService.toggleCompleted(taskId);
  }
}
