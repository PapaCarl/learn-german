import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }

  getUserByEmail(email: String): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/users?email=${email}`);
  }


}
