import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
        name: new FormControl(null, Validators.required, this.invalidNames),
        gender: new FormControl('female')
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, this.lowPasswords.bind(this)]),
      children: new FormArray([])
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

  invalidNames(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      // http request
      setTimeout(() => {
        if (control.value == "mostafa") {
          resolve({invalidName: true})
        } else {
          resolve(null)
        }
      }, 2000);
    })
  }

  onNewChild() {
    console.log("Child!");
    (<FormArray>this.registerForm.get('children')).push(new FormControl(null))
  }

}
