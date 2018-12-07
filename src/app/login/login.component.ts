import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(
      (data: boolean) => {
        this.isLoggedIn = data;
        console.log(this.isLoggedIn)
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
