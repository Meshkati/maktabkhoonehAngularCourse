import { Component, OnInit } from '@angular/core';
import { ProjectService, Task, Project } from '../services/project.service';
import { ActivatedRoute } from '@angular/router';

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
    private activatedRout: ActivatedRoute) { }

  ngOnInit() {
    let id:number = +this.activatedRout.snapshot.params['id'];
    console.log(id);
    this.tasks = this.projectSerivce.getTasks(id);
  }

}
