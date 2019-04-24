import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'lde-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  profileForm = this.fb.group({
    logName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    firstName: [''],
    lastName: [''],
    dateOfBirth: [''],
    sex:['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }

  public onSubmit() {
    console.log(this.profileForm);
  }
}
