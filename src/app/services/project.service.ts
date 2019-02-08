import { Injectable } from "@angular/core";

@Injectable()
export class ProjectService {
    projects: Array<Project> = new Array<Project>();
    lastIDNumber: number = 0;

    constructor() {
        this.addNewProject("پیش فرض");
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
        this.projects.push(new Project(this.lastIDNumber++ ,projectTitle));
    }

    addNewTask(title: string, isDone: boolean, projectID: number = 0, deadline: Date) {
        let newTask = new Task(title, isDone, projectID, new Date(), deadline);
        this.addTaskToProject(newTask, projectID);
    }

    getTasks(projectID: number) {
        if (this.projects[projectID] != null && this.projects[projectID] != undefined) {
            return this.projects[projectID].tasks;
        } else {
            return null;
        }
    }

    getProjectOfTask(task: Task) {
        if (this.projects[task.projectID] != null && this.projects[task.projectID] != undefined)
            return this.projects[task.projectID];
    }
}

export class Project {
    public title: string;
    public id: number;
    public tasks: Array<Task> = new Array<Task>();
    
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}

export class Task {
    public title: string;
    public isDone: boolean = false;
    public projectID: number;
    public createdAt: Date;
    public deadline: Date;
    
    constructor(title: string, isDone, projectID: number, createdAt: Date, deadline: Date) {
        this.title = title;
        this.isDone = isDone;
        this.projectID = projectID;
        this.createdAt = createdAt;
        this.deadline = deadline;
    }
}
