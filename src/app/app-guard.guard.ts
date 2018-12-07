import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivateChild } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AppGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService,
        private router: Router) {

    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        return this.canActivate(activatedRoute, routerState);
    }
}