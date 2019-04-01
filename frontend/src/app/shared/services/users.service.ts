import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  // getUserByEmail(email: string): Observable<User> {
  //   return this.httpClient.get(`http://localhost:3000/users?email-${email}`)
  //     .map
  // }

}
