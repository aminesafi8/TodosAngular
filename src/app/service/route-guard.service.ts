import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  //constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }
  constructor(private router: Router, private basicAuthenticationService: BasicAuthenticationService) { }

  //Interface that a class can implement to be a guard deciding if a route can be activated
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Route Guard Activated!');
    if (this.basicAuthenticationService.isUserLoggedIn())
      return true;

    //  redirect the user to Login Page if there is no session in the browser
    this.router.navigate(['login']);
    return false;
  }
}
