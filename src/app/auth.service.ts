import { Injectable } from "@angular/core";
import { Observable, Observer, Subject } from "rxjs";

@Injectable()
export class AuthService {
    authSubject: Subject<boolean>;
    obTest: Observable<number>;
    suTest: Subject<number>;

    constructor() {
        this.authSubject = new Subject();
        
        let observableCounter = 0;
        let subjectCounter = 0;
        this.obTest = Observable.create((observer: Observer<number>) => {
            setInterval(() => {
                observer.next(observableCounter++);
            }, 1000)
        })

        this.suTest = new Subject<number>();

        setInterval(() => {
            this.suTest.next(subjectCounter++);
        }, 1000)
    }

    isLoggedIn : boolean = false;

    login() {
        this.isLoggedIn = true;
        this.authSubject.next(this.isLoggedIn);
    }

    logout() {
        this.isLoggedIn = false;
        this.authSubject.next(this.isLoggedIn);
    }

    isAuthenticated() {
        this.authSubject.next(this.isLoggedIn);
        return this.authSubject;
    }

    testObservable() {
        return this.obTest;
    }

    testSubject() {
        return this.suTest;
    }
}