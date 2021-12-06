import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayUserMenu: boolean;
  shortName!: string;
  currentUser!: User | null;
  notifications: any = [];
  unread: number = 0;
  isViewed = 'is-viewed';
  notViewed = 'not-viewed'
  viewed: boolean = false;
  userInfo!: User;

  constructor(private authenticationService: AuthenticationService, private router: Router) { 
    this.displayUserMenu = false;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

}
