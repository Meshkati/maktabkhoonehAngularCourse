import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.testObservable().subscribe(
      (data) => {
        // console.log("inHome - Observable " + data)
      }) 
    this.authService.testSubject().subscribe(
      (data) => {
        console.log("inHome - Subject " + data)
      }
    )
  }

}
