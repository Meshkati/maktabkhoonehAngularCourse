import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private baseURL = 'http://localhost:3000/'


  constructor(
    private http: Http
  ) { }

  storeTasks(tasks) {
    const myHeaders = new Headers({
      'Cotent-Type': 'application/json'
    })
    return this.http.post(this.baseURL + 'tasks/store', tasks, {headers: myHeaders})
  }
}
