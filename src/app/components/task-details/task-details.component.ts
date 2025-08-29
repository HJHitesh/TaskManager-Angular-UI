import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  tasks: Task[] = [];
  displayedColumns: string[] = ['id', 'title', 'description', 'status', 'dueDate', 'actions'];
  page = 0;
  size = 5;
  total = 0;
  statusFilter = '';

  constructor(private service: TaskService,private router: Router) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.service.getTasksDetails(this.statusFilter, this.page, this.size).subscribe(data => {
      this.tasks = data.content; // assign array for mat-table
      this.total = data.totalElements;
    });
  }

  deleteTask(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.service.deleteTask(id).subscribe(() => this.loadTasks());
    }
  }

  filterByStatus() {
    this.page = 0; // reset page when filter changes
    this.loadTasks();
  }
  // method to navigate
  editTask(id: number) {
    this.router.navigate(['/tasks', id, 'edit']);
  }
}
