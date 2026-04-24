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
  private readonly tasksSignal = signal<Task[]>([]);

  readonly tasks = this.tasksSignal.asReadonly();

  addTask(payload: TaskPayload): void {
    const newTask: Task = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...payload,
    };

    this.tasksSignal.update((current) => [newTask, ...current]);
  }

  updateTask(taskId: string, payload: TaskPayload): void {
    this.tasksSignal.update((current) =>
      current.map((task) => (task.id === taskId ? { ...task, ...payload } : task)),
    );
  }

  deleteTask(taskId: string): void {
    this.tasksSignal.update((current) => current.filter((task) => task.id !== taskId));
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
  }
}
