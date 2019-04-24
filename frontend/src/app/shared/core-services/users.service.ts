import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {parseHttpResponse} from "selenium-webdriver/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUserByEmail(email: string): Observable<any> {
    console.log(email);
    return this.httpClient.get(`http://localhost:3000/users?email=${email}`)
  }
}
