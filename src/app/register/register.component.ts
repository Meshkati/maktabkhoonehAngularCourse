import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  gender = "male";

  constructor() { }

  ngOnInit() {
  }

  onFormSubmitted(formReference: NgForm) {
    console.log("Submitted!");
    console.log(formReference);
    console.log(formReference.valid);
    setTimeout(() => {
      // formReference.setValue({
      //   first_name: "",
      //   email: "",
      //   password: "",
      //   gender: ""
      // });
      formReference.reset();
      // formReference.form.patchValue({
      //   email: "ali@gmail.com"
      // })
    }, 1000);
  }

}
