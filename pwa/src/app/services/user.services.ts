import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface User {
  username: string,
  email: string,
  password: string,
}

@Injectable()

export class UserService {

  userApi: string = 'api/user';

  constructor(private http: HttpClient) {

  }


  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userApi)
  }
}