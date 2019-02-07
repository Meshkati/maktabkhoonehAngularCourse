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
    const myHeaders = new HttpHeaders({
      'Cotent-Type': 'application/json'
    })

    return this.http.post(this.baseURL + 'tasks/store', tasks, {
      headers: myHeaders
    })
  }

  getTasks() {
    return this.http.get<Task[]>(this.baseURL + 'tasks', {
      observe: 'body',
      responseType: 'json'
    })
  }
}
