import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit, OnDestroy {
  testObservableSubscription;
  testSubjectSubscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.testObservableSubscription = this.authService.testObservable().subscribe(
      (data) => {
        console.log("inHome - Observable " + data)
      }) 
    this.testSubjectSubscription = this.authService.testSubject().subscribe(
      (data) => {
        console.log("inHome - Subject " + data)
      }
    )
  }

  ngOnDestroy() {
    this.testSubjectSubscription.unsubscribe();
    this.testObservableSubscription.unsubscribe();
  }

}
