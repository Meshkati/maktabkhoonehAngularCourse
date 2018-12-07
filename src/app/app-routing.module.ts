import { Routes, RouterModule } from "@angular/router";
import { AppHomeComponent } from "./app-home/app-home.component";
import { ProjectComponent } from "./project/project.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { ProjectsComponent } from "./projects/projects.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AppGuard } from "./app-guard.guard";

const appRoute: Routes = [
    { path: 'home', component: AppHomeComponent, children: [
        { path: ':id', component: ProjectComponent },
        { path: '', component: TaskListComponent }
    ] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AppGuard] },
    { path: 'projects/:id', component: ProjectComponent },
    { path: 'notFound', component: NotFoundComponent, data: { errorMessage: 'پیدا نشد', date: 'جمعه' } },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '/notFound', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }