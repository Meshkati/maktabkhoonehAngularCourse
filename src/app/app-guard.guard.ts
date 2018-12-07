import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivateChild } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable()
export class AppGuard implements CanActivate, CanActivateChild {
    guardObservable: Observable<boolean>;

    constructor(private authService: AuthService,
        private router: Router) {

    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> {
        this.authService.isAuthenticated().subscribe(
            (data) => {
                this.guardObservable = Observable.create((observer: Observer<boolean>) => {
                    console.log("data ->" + data);
                    
                    if (data == true) {
                        observer.next(true);
                    } else {
                        observer.next(false);
                        this.router.navigate(['/login']);
                    }
                })
            }
        )
        
        
        return this.guardObservable;
    }

    canActivateChild(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(activatedRoute, routerState);
    }
}