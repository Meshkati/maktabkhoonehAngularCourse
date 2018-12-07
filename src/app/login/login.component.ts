import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(
      (data: boolean) => {
        this.isLoggedIn = data;
        console.log(this.isLoggedIn)
      }
    )

    this.authService.testObservable().subscribe(
      (data) => {
        // console.log("inLogin - Observable -> " + data);
      }
    );

    this.authService.testSubject().subscribe(
      (data) => {
        console.log("inLogin - Subject -> " + data);
      }
    )
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
