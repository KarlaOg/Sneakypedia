import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import { ErrorService } from 'src/app/services/error.service';
import * as moment from "moment";
import { JwtHelperService } from "@auth0/angular-jwt";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
const httpOptionsPatch = {
  headers: new HttpHeaders({
    'Content-Type': 'application/merge-patch+json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = "http://localhost/api/";
  private JWTLoginCheck = "http://localhost/authentication_token";

  private authenticatedUser: BehaviorSubject<User> = new BehaviorSubject<User>(null!);
  user: Observable<User> = this.authenticatedUser.asObservable();

  isLoggedIn: Observable<boolean>;
  isLoggedOut: Observable<boolean>;

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private error: ErrorService) {

    this.isLoggedIn = this.user.pipe(map(user => !!user))
    this.isLoggedOut = this.isLoggedIn.pipe(map(loggedIn => !loggedIn))

    // TODO Sort out of to login someone if token is valid  
    // const tokenUser = this.getToken();
    // if (tokenUser) {
    //   this.authenticatedUser.next(JSON.parse(tokenUser))
    // }
    //  else {
    //   this.authenticatedUser.next(null!)
    // }
  }


  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + 'users', { email: user.email, password: user.password, firstname: user.firstname, lastname: user.lastname }, httpOptions)
      .pipe(
        catchError(this.error.handleError),
        shareReplay()
      )
  }

  checkLoginUser(user: User): Observable<User> {
    return this.http.post<User>(this.JWTLoginCheck, { email: user.email, password: user.password }, httpOptions)
      .pipe(
        tap((res) => {
          this.setSession(res)
          this.authenticatedUser.next(user);

        }),
        catchError(err => {
          console.log('caught mapping error and rethrowing', err);
          return throwError(() => err);
        }),
        shareReplay()
      )
  }


  updateUserAccount(user: User): Observable<User> {

    const idUser = this.decodeToken().id

    return this.http.patch<User>(this.apiUrl + 'users/' + `${idUser}`, user, httpOptionsPatch)
      .pipe(
        catchError(this.error.handleError),
      );

  }


  deleteUserAccount(): Observable<any> {
    const idUser = this.decodeToken().id

    return this.http.delete<User>(this.apiUrl + 'users/' + `${idUser}`, httpOptions)
      .pipe(
        tap(() => {
          this.logout();

        }),
        catchError(this.error.handleError),
        shareReplay()
      );


  }


  getToken(): string {
    const token = localStorage.getItem('id_token')!;
    return JSON.parse(token)!;
  }

  decodeToken() {
    return this.helper.decodeToken(this.getToken())
  }

  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', JSON.stringify(authResult.token));
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }


  logout(): void {
    this.authenticatedUser.next(null!)
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }


  getExpiration(): boolean {
    const expiration = localStorage.getItem("expires_at");
    return this.helper.isTokenExpired(JSON.parse(expiration!));

  }



}
