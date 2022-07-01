import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import { ErrorService } from 'src/app/services/error.service';
import * as moment from "moment";
import { JwtHelperService } from "@auth0/angular-jwt";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/ld+json',
  }),
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


  constructor(private http: HttpClient, private error: ErrorService, private jwtHelper: JwtHelperService) {

    this.isLoggedIn = this.user.pipe(map(user => !!user))
    this.isLoggedOut = this.isLoggedIn.pipe(map(loggedIn => !loggedIn))

    const tokenUser = this.getToken();
    const expirationT = this.getExpiration();
    if (expirationT === false) {
      this.authenticatedUser.next(JSON.parse(tokenUser))
    }
    else {
      this.logout()
      this.authenticatedUser.next(null!)
    }
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

    if (this.getExpiration() === false) {
      const idUser = this.decodeToken().id

      return this.http.put<User>(this.apiUrl + 'users/' + `${idUser}`, user, httpOptions)
        .pipe(
          catchError(this.error.handleError),
        );
    } else {
      throw new Error('La session a expirer. Veuillez vous reconnecter.');
    }


  }


  deleteUserAccount(): Observable<User> {
    if (this.getExpiration() === false) {
      const idUser = this.decodeToken().id

      return this.http.delete<User>(this.apiUrl + 'users/' + `${idUser}`, httpOptions)
        .pipe(
          tap(() => {
            this.logout();

          }),
          catchError(this.error.handleError),
          shareReplay()
        );
    } else {
      throw new Error('La session a expirer. Veuillez vous reconnecter.');
    }



  }


  private setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id_token', JSON.stringify(authResult.token));
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  getToken(): string {
    return localStorage.getItem('id_token')!;
  }

  logout(): void {
    this.authenticatedUser.next(null!)
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  decodeToken() {
    return this.jwtHelper.decodeToken(localStorage.getItem('id_token')!)
  }

  getExpiration(): boolean {
    return this.jwtHelper.isTokenExpired(this.getToken());
  }

  public isAuthenticated(): boolean {
    const token = this.getToken()
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }


}
