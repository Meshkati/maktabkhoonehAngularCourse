import { Component, OnInit } from '@angular/core';
import { ProjectService, Task, Project } from '../services/project.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  tasks: Array<Task> = new Array<Task>()
  project: Project;

  constructor(
    private projectSerivce: ProjectService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // let id:number = +this.activatedRout.snapshot.params['id'];
    let id: number = 0;
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        id = params['id'];
        this.tasks = this.projectSerivce.getTasks(id);
        console.log("inProjectComponent -> id -> " + params['id']);
      },
      () => {
        
      },
      () => {

      }
    );
  }

}
