export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  createdAt: string;
}

export const TASK_STATUSES: TaskStatus[] = ['pending', 'in-progress', 'completed'];
export const TASK_PRIORITIES: TaskPriority[] = ['low', 'medium', 'high'];
