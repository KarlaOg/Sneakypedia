import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { UserService } from "../user.service";



@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {

  }
  canActivate(): boolean {
    if (this.userService.isAuthenticated() === true) {
      this.router.navigate([""])
      return false;
    }
    return true;
  }
}