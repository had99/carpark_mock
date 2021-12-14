import { AuthenticationService } from 'src/app/service/authentication.service';
import { Component, Input, OnInit } from '@angular/core';
import menu, { SlideBarLink } from 'src/app/model/nav-links';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() expanded!: boolean;

  sideBarLinks!: SlideBarLink[] | undefined;
  currentUser: any;
  roleUser: any;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.currentUser = JSON.parse(this.authenticationService.loggedIn);
    this.roleUser = this.router.url.slice(1,6);
    console.log(this.roleUser);
    console.log(this.router.url);
    
  }

  ngOnInit(): void {
    if (this.roleUser === "human") {
      this.sideBarLinks = menu.get("Admin_Hrm");
    } else if (this.roleUser === "carpa") {
      this.sideBarLinks = menu.get("Admin_Carpark");
    }
  }

}
