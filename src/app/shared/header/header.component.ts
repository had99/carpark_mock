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

  // displayUserMenu: boolean;
  // shortName!: string;
  currentUser!: any;
  hrm: boolean = false;
  carpark: boolean = false;
  // notifications: any = [];
  // unread: number = 0;
  // isViewed = 'is-viewed';
  // notViewed = 'not-viewed'
  viewed: boolean = false;
  userInfo!: User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    // this.displayUserMenu = false;
    // this.authenticationService.loggedIn.subscribe((x : any) => this.currentUser = x);
    this.currentUser = JSON.parse(this.authenticationService.loggedIn);
  }

  ngOnInit(): void {
    console.log('29', this.currentUser.roles_name);
    if(this.currentUser.roles_name[0] == 'Admin_Hrm' || this.currentUser.roles_name[1] == 'Admin_Hrm'){
      this.hrm = true;
    }
    else if(this.currentUser.roles_name[0] == 'Admin_CarPark' ||  this.currentUser.roles_name[1] == 'Admin_CarPark'){
      this.carpark = true;
    }
  }

}
