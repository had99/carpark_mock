import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpark-operation-admin-layout',
  templateUrl: './carpark-operation-admin-layout.component.html',
  styleUrls: ['./carpark-operation-admin-layout.component.css']
})
export class CarparkOperationAdminLayoutComponent implements OnInit {
  expanded: boolean;
  constructor() {
    this.expanded =true;
   }

  ngOnInit(): void {
  }

  handleResize() {
    const match = window.matchMedia('(min-width: 1024px)');
    match.addEventListener('change', (e) => {
      this.expanded = e.matches;
    });
  }

  manualToggle() {
    this.expanded = !this.expanded;
  }

}
