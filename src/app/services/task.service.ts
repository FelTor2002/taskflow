import { Injectable, signal } from '@angular/core';

import { Task, TaskStatus } from '../models/interfaces/task.model';

export interface TaskPayload {
  title: string;
  description: string;
  status: TaskStatus;
  priority: Task['priority'];
  dueDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly storageKey = 'taskflow.tasks.v1';
  private readonly tasksSignal = signal<Task[]>([]);

  readonly tasks = this.tasksSignal.asReadonly();

  constructor() {
    this.restoreFromStorage();
  }

  addTask(payload: TaskPayload): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...payload,
    };

    this.tasksSignal.update((current) => [newTask, ...current]);
    this.persistTasks();
  }

  updateTask(taskId: string, payload: TaskPayload): void {
    this.tasksSignal.update((current) =>
      current.map((task) => (task.id === taskId ? { ...task, ...payload } : task)),
    );
    this.persistTasks();
  }

  deleteTask(taskId: string): void {
    this.tasksSignal.update((current) => current.filter((task) => task.id !== taskId));
    this.persistTasks();
  }

  toggleCompleted(taskId: string): void {
    this.tasksSignal.update((current) =>
      current.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        return {
          ...task,
          status: task.status === 'completed' ? 'pending' : 'completed',
        };
      }),
    );
    this.persistTasks();
  }

  private persistTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasksSignal()));
  }

  private restoreFromStorage(): void {
    const serializedTasks = localStorage.getItem(this.storageKey);
    if (!serializedTasks) {
      return;
    }

    try {
      const parsedTasks = JSON.parse(serializedTasks) as Task[];
      this.tasksSignal.set(parsedTasks);
    } catch {
      this.tasksSignal.set([]);
    }
  }
}
