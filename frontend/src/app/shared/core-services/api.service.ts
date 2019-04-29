import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {User} from "../models/user.model";

@Injectable()
export class ApiService {

  private configURL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  getUserByEmail(email: String): Observable<User> {
    return this.httpClient.get(`${this.configURL}/users?email=${email}`)
      .pipe(
        map(user => {
          if (user[0]) {
            return user[0];
          } else {
            throw new Error(`user with such an email wasn't found`);
          }
        })
      )
  }


}
