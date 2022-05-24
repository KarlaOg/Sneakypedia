import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { UserService } from "../user.service";



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private userService : UserService , private router:Router){
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.userService.user.pipe(
      take(1), 
      map(user => {
        const isAuth = !!user; 
        if(isAuth){
          return true
        }
        return this.router.createUrlTree(["/connexion"])
      })
    )
  }
}