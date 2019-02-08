import { Component, OnInit } from '@angular/core';
import { ForTestService } from '../for-test.service';

@Component({
  selector: 'app-for-test',
  templateUrl: './for-test.component.html',
  styleUrls: ['./for-test.component.css']
})
export class ForTestComponent implements OnInit {
  title: string = '';

  constructor(
    private testService: ForTestService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.title = this.testService.getTitle()
    }, 1500);
  }

}
