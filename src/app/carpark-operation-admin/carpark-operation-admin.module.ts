import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'booking-office-management',
    loadChildren: () => import('./booking-office-management/booking-office-management.module').then((m) => m.BookingOfficeManagementModule)
  },
  {
    path: 'car-management',
    loadChildren: () => import('./car-management/car-management.module').then((m) => m.CarManagementModule)
  },
  {
    path: 'parking-lot-management',
    loadChildren: () => import('./parking-lot-management/parking-lot-management.module').then((m) => m.ParkingLotManagementModule)
  },
  {
    path: 'ticket-management',
    loadChildren: () => import('./ticket-management/ticket-management.module').then((m) => m.TicketManagementModule)
  },
  {
    path: 'trip-management',
    loadChildren: () => import('./trip-management/trip-management.module').then((m) => m.TripManagementModule)
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CarparkOperationAdminModule { }
