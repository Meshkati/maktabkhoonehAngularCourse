import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable()
export class AuthService {
    isLoggedIn : boolean = false;

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

    isAuthenticated() {
        let counter = 0;
        let o = Observable.create((observer: Observer<boolean>) => {
          observer.next(this.isLoggedIn);
          setTimeout(
              () => {
                this.login()
                observer.next(this.isLoggedIn);
              }
          , 4000)
        });
        
        return o;
    }
}