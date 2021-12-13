import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(this.authenticationService.loggedIn);
        // debugger
        console.log(currentUser);
        if (currentUser) {
            request = request.clone({ headers: request.headers.append('Authorization', 'Bearer ' + currentUser.token + '') });
            // request = request.clone({
            //     setHeaders: {
            //         Authorization: `Bearer ${currentUser}`,
            //         'Access-Control-Allow-Origin': '*',
            //     }
            // });
        }
        return next.handle(request);
    }
}