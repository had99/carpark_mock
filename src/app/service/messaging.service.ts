import { AuthenticationService } from './authentication.service';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../model/user";


@Injectable({ 
    providedIn: 'root' 
})
export class MessagingService {
    currentMessage = new BehaviorSubject(null);
    currentUser!: User | null;

    constructor(private messageService: MessagingService, private authenticationService: AuthenticationService){
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
}