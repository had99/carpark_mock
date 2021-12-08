import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-resource-management-layout',
  templateUrl: './human-resource-management-layout.component.html',
  styleUrls: ['./human-resource-management-layout.component.css']
})
export class HumanResourceManagementLayoutComponent implements OnInit {
  @Input() expanded!: boolean;
  constructor() { }

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
