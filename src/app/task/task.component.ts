import { Component, OnInit, Input } from '@angular/core';
import { Task, ProjectService } from '../services/project.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    // setInterval(() => {
    //   this.task.deadline = new Date(2019, 2, 8, 0, 0, 0)
    // }, 1000)
  }

  completeTask() {
    this.task.isDone = true;
  }

  getProjectTitle() {
    return this.projectService.getProjectOfTask(this.task).title;
  }

  getProjectID() {
    return this.projectService.getProjectOfTask(this.task).id;
  }

}
