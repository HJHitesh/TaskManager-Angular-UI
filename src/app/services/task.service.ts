// src/app/services/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //We can also add the environment file and add this into that and according to deve and production we can trigger
  //Local

  //We have SSL enabled at backend shlf signed
  //private apiUrl = 'https://localhost:8082/tasks'; // Dev


  //Deployment production
  private apiUrl = 'https://ec2-3-148-243-104.us-east-2.compute.amazonaws.com:8082/tasks'; //Prod


  constructor(private http: HttpClient) {}

  getTasksDetails(status?: string, page: number = 0, size: number = 5): Observable<any> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);
    if (status) params = params.set('status', status);
    return this.http.get<any>(this.apiUrl, { params });
  }

  getTaskDetail(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
