import { Component, OnInit } from '@angular/core';
import { Project, Task, ProjectService } from '../services/project.service';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  constructor(private projectService: ProjectService) { }
  
  ngOnInit() {
    
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

  getProjectsTitle() {
    // let titles = new Array<String>();
    // for (let project of this.projectService.getProjects()) {
    //   titles.push(project.title);
    // }

    // return titles;

    return this.projectService.getProjects();
  }
  
}