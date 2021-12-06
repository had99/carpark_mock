import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

const routes: Routes = [
  { path: 'ticket-list', component: TicketListComponent },
  { path: 'add-ticket', component: AddTicketComponent },
];

@NgModule({
  declarations: [
    TicketListComponent,
    AddTicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TicketManagementModule { }
