import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFormSubmitted(formReference: NgForm) {
    console.log("Submitted!");
    console.log(formReference);
    console.log(formReference.valid);
    
  }

}
