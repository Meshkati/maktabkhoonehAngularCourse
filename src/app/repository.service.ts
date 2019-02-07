import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Task } from './services/project.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private baseURL = 'http://localhost:3000/'


  constructor(
    private http: HttpClient
  ) { }

  storeTasks(tasks) {
    return this.http.post(this.baseURL + 'tasks/store', tasks)
  }

  getTasks() {
    return this.http.get<Task[]>(this.baseURL + 'tasks', {
      observe: 'body',
      responseType: 'json'
    })
  }
}
