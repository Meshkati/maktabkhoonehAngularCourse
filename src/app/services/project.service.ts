import { Injectable } from "@angular/core";

@Injectable()
export class ProjectService {
    projects: Array<Project> = new Array<Project>();
    
    constructor() {
        this.projects.push(new Project("پیش فرض"));
    }

    getProjects() {
        return this.projects;
    }

    addTaskToProject(task: Task, projectID: number = 0) {
        if (this.projects[projectID] != null && this.projects[projectID] != undefined) {
            this.projects[projectID].tasks.push(task);
        } else { // TODO: fix it later
            this.addNewProject(projectID.toString());
            this.projects[projectID].tasks.push(task);
        }
    }

    addNewProject(projectTitle: string) {
        this.projects.push(new Project(projectTitle));
    }

    getTasks(projectID: number) {
        if (this.projects[projectID] != null && this.projects[projectID] != undefined) {
            return this.projects[projectID].tasks;
        } else {
            return null;
        }
    }
}

export class Project {
    public title: string;
    public tasks: Array<Task> = new Array<Task>();
    
    constructor(title: string) {
        this.title = title;
    }
}

export class Task {
    private title: string;
    public isDone: boolean = false;
    
    constructor(title: string, isDone) {
        this.title = title;
        this.isDone = isDone;
    }
}
