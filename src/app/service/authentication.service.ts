import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../model/user";


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }
  public get loggedIn(): any {
    return localStorage.getItem('currentUser');
  }

  login(email: string, password: string) {
    const headers = { 'content-type': 'application/json' }
    const obj = { username: email, password: password };
    const body = JSON.stringify(obj);
    return this.httpClient.post<any>(`${environment.apiUrl}/api/login`, body, { 'headers': headers })
      .pipe(tap(res => {
        const roles = res.roles_name
        if (roles.length > 1) {
          this.router.navigate(['/roles']);
        }
         if (roles[0] === 'Admin_Hrm') {
          this.router.navigate(['/human-resource-management-layout']);
        } else if (roles[0] === 'Admin_Carpark') {
          this.router.navigate(['/carpark-operation-admin-layout']);
        }
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(res.token);
        // const userRole = decodedToken.sub;
        // if ( userRole === 'tuyen1') {
        //   this.router.navigate(['/hrm/view-employee']);
        // }
        // else {
        //   this.router.navigate(['/auth/login']);
        // }
        let user = JSON.stringify(res);
        localStorage.setItem('currentUser', user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/authentication/login'])
  }
}