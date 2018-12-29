import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  gender = "male";
  registerForm: FormGroup;

  invalidPassword = [
    "1234",
    "abcd",
    "qwerty"
  ]

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      personalData: new FormGroup({
        name: new FormControl(null, Validators.required),
        gender: new FormControl('female')
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, this.lowPasswords.bind(this)])
    });
  }

  onSubmit() {
    console.log("Submitted!");
    console.log(this.registerForm);  
  }

  lowPasswords(control: FormControl): {[lowLevelPassword: string]: boolean} {
    if (this.invalidPassword.indexOf(control.value) != -1) {
      return {
        lowLevelPassword: true
      }
    }

    return null;
  }

}
