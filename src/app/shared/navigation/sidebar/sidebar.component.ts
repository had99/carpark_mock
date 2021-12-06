import { AuthenticationService } from 'src/app/service/authentication.service';
import { Component, Input, OnInit } from '@angular/core';
import menu, { SlideBarLink } from 'src/app/model/nav-links';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() expanded!: boolean;

  sideBarLinks!: SlideBarLink[] | undefined;

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    var userRole = this.authenticationService.currentUserValue?.roles_name
    if(userRole === "Admin_Hrm"){
      this.sideBarLinks = menu.get("Admin_Hrm");
    }else if ( userRole === "Admin_Carpark"){
      this.sideBarLinks = menu.get("Admin_Carpark");
    }
  }

}
