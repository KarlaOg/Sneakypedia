import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { UserService } from 'src/app/services/user/user.service';
import { catchError, map, Observable, of, take, tap, throwError } from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = this.userService.getToken();
    if (idToken) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + idToken,
        }
      });
      return next.handle(request);
    } else {
      return next.handle(request)
        // .pipe(
        //   tap(),
        //   catchError((error: HttpErrorResponse) => {
        //     let errorMsg = '';
        //     if (error.error instanceof ErrorEvent) {
        //       console.log('This is client side error');
        //       errorMsg = `Error: ${error.error.message}`;
        //     } else {
        //       console.log('This is server side error');
        //       errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        //     }
        //     console.log(errorMsg);
        //     return throwError(() => errorMsg);
        //   })
        // )
    }


  }

}


