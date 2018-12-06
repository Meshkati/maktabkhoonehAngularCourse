import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../services/project.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
    // this.task = new Task("تسک!")
  }

  completeTask() {
    this.task.isDone = true;
  }

}
