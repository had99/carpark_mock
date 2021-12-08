import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.loggedIn;

    if (currentUser) {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(currentUser);
        const userRole = decodedToken.sub;
        // debugger
        // if (userRole !== 'tuyen1') {
        //     this.router.navigate(['/car']);
        //     return true;
        // }

        return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}
}
