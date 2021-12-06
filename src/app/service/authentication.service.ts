import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../model/user";


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User | null>;

    constructor(private httpClient: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | null {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Observable<any> {
        // console.log('aaaaaaaaaa');

        return this.httpClient.post<any>(`${environment.apiUrl}/api/login`, { username, password })
            .pipe(
                map(res => {
                    console.log(res);
                    if (res.statusCode === 400) {
                        throw res.message;
                    }
                    var user = res.data
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user;
                })
            );
        // const headers = { 'content-type': 'application/json' }
        // const obj = { username: username, password: password };
        // const body = JSON.stringify(obj);
        // return this.httpClient.post<any>(`${environment.apiUrl}/api/login`, body, { 'headers': headers })
        //     .pipe(tap(res => {
        //         const helper = new JwtHelperService();
        //         const decodedToken = helper.decodeToken(res.token);
        //         const userRole = decodedToken.sub;
        //         if (userRole === 'tuyen1') {
        //             this.router.navigate(['/hrm/view-employee']);
        //         }
        //         else {
        //             this.router.navigate(['/auth/login']);
        //         }
        //         localStorage.setItem('currentUser', res.token);
        //     }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}