import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

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
    return this.http.post(this.baseURL + 'tasks/storeSDSDSD', tasks, {headers: myHeaders}).pipe(
      catchError(err => {
        console.log("Error happened!", err);
        
        return throwError(err)
      })
    )
  }

  getTasks() {
    return this.http.get(this.baseURL + 'tasks').pipe(
      map(this.extractBody)
    )
  }

  extractBody(response: Response) {
    return response.json()
  }
}
