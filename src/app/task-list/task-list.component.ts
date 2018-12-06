import { Component, OnInit } from '@angular/core';
import { Project, Task, ProjectService } from '../services/project.service';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTitle: string;
  newProjectID: number;
  
  
  constructor(private projectService: ProjectService) { }
  
  ngOnInit() {
    this.newProjectID = 0;
  }
  
  addNewTask() {
    let task: Task = new Task(this.newTitle, false);
    
    this.projectService.addTaskToProject(task, this.newProjectID);
  }
  
  getTasks() {
    let validTasks = new Array<Task>();
    
    for(let project of this.projectService.getProjects()) {
      for(let task of project.tasks) {
        if (!task.isDone) {
          validTasks.push(task);
        }
      }
    }
    
    return validTasks;
  }
  
}