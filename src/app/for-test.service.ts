import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForTestService {

  constructor() { }

  getTitle() {
    return 'For Test!'
  }
}
