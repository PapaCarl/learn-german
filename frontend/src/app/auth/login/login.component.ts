import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/core-services/users.service";
import {ApiService} from "../../shared/core-services/api.service";

@Component({
  selector: 'lde-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UsersService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  public onSubmit() {
    console.log(this.form.value.email);
    const formData = this.form.value;
    this.api.getUserByEmail(formData.email).subscribe(item => {
      console.log(item);
    })
  }
}
