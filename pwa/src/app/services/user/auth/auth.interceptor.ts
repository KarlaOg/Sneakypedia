import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { UserService } from 'src/app/services/user/user.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.userService.getToken();
    console.log(authToken); 
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    console.log(req);
    return next.handle(req);
  }
}