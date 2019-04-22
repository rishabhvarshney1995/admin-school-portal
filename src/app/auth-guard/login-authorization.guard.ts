import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthorizationGuard implements  CanActivate {
  constructor(private auth: AuthenticationService, private router: Router){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.auth.getCurrenctUser()){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
