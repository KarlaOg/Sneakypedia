import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "/api/user"; 



  constructor(private http : HttpClient) { }


  addUser(user : User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user); 
  }
}
