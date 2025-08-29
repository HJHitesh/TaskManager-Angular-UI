import { Routes } from '@angular/router';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskDetailsComponent },
  { path: 'tasks/new', component: TaskCreateComponent },
  { path: 'tasks/:id/edit', component: TaskCreateComponent, data: { renderMode: 'client' } },
];
