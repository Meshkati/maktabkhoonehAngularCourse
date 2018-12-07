import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms'
import { ProjectService } from './services/project.service';
import { AppHomeComponent } from './app-home/app-home.component';
import { ProjectComponent } from './project/project.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';

const appRoute: Routes = [
  { path: 'home', component: AppHomeComponent, children: [
    { path: ':id', component: ProjectComponent },
    { path: '', component: TaskListComponent }
  ] },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    TaskListComponent,
    TaskComponent,
    AppHomeComponent,
    ProjectComponent,
    AddTaskDialogComponent,
    AddTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
