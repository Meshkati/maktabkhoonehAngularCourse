import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoggedIn;
  loggedInSubscription;
  testObservableSubscription;
  testSubjectSubscription;
  

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedInSubscription = this.authService.isAuthenticated().subscribe(
      (data: boolean) => {
        this.isLoggedIn = data;
        console.log(this.isLoggedIn)
      }
    )

    this.testObservableSubscription = this.authService.testObservable().subscribe(
      (data) => {
        // console.log("inLogin - Observable -> " + data);
      }
    );

    this.testSubjectSubscription = this.authService.testSubject().subscribe(
      (data) => {
        console.log("inLogin - Subject -> " + data);
      }
    )
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
    this.testObservableSubscription.unsubscribe();
    this.testSubjectSubscription.unsubscribe();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
