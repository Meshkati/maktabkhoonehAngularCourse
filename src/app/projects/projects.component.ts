import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = new Array<Project>();
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects()
  }

  onShowProjects() {
    this.router.navigate(["projects"], {relativeTo: this.activatedRoute});
  }

}
