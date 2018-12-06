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
    // this.task = new Task("تسک!")
  }

  completeTask() {
    this.task.isDone = true;
  }

  getProjectTitle() {
    return this.projectService.getProjectOfTask(this.task).title;
  }

}
