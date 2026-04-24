import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Task } from '../../models/interfaces/task.model';

@Component({
  selector: 'app-task-card',
  imports: [DatePipe],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  readonly task = input.required<Task>();
  readonly edit = output<string>();
  readonly remove = output<string>();
  readonly toggleCompleted = output<string>();
}
