import { Component, OnInit } from '@angular/core';
import { Project, Task, ProjectService } from '../services/project.service';
import { ProjectsComponent } from '../projects/projects.component';
import { RepositoryService } from '../repository.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  constructor(
    private projectService: ProjectService,
    private repository: RepositoryService) { }
  
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

  onStoreTasks() {
    this.repository.storeTasks(this.getTasks()).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("In component!", err);
        
      }
    )
  }

  onGetTasks() {
    this.repository.getTasks().subscribe(
      res => {
        console.log(res);
        const tasks = <Array<Task>>res
        for(let task of tasks) {
          this.projectService.addNewTask(task.title, task.isDone, task.projectID)
        }
      },
      err => {
        console.log(err);
      }
    )
  }
  
}