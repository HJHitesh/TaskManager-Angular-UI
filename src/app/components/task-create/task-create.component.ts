import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskService } from '../../services/task.service';
import { Task, TaskStatus } from '../../models/task.model';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  taskId: number | null = null;

  statusOptions: TaskStatus[] = ['PENDING', 'COMPLETED'];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dueDate: ['', Validators.required],
      status: ['PENDING', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.taskId = +id;
        this.loadTask(this.taskId);
      }
    });
  }

  loadTask(id: number) {
    this.taskService.getTaskDetail(id).subscribe({
      next: (task: Task) => {
        this.taskForm.patchValue({
          title: task.title,
          description: task.description,
          dueDate: task.dueDate ? new Date(task.dueDate) : null,
          status: task.status
        });
      },
      error: err => this.errorMessage = 'Failed to load task'
    });
  }

  futureDateFilter = (d: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return !d ? false : d > today; // only dates after today
  }

  submit() {
    if (this.taskForm.invalid) return;

    const task: Task = {
      ...this.taskForm.value,
      dueDate: this.taskForm.value.dueDate.toISOString().split('T')[0] // convert Date to yyyy-mm-dd
    };


    if (this.taskId) {
      // Update task
      this.taskService.updateTask(this.taskId, task).subscribe({
        next: () => {
          this.successMessage = 'Task updated successfully',
          this.router.navigate(['/tasks']);
        },
        error: () => this.errorMessage = 'Failed to update task'
      });
    } else {
      // Create task
      this.taskService.createTask(task).subscribe({
        next: () => {
          this.successMessage = 'Task created successfully',
          this.router.navigate(['/tasks']);
        },
        error: () => this.errorMessage = 'Failed to create task'
      });
    }
  }
}
