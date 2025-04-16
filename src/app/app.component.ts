import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from './taskview/taskview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskViewComponent],
  template: `<app-task-view></app-task-view>`
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
