import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListComponent } from './trip-list/trip-list.component';
import { AddTripComponent } from './add-trip/add-trip.component';

const routes: Routes = [
  {path:'trip-list', component:TripListComponent},
  {path:'add-trip', component:AddTripComponent},
];

@NgModule({
  declarations: [
    TripListComponent,
    AddTripComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TripManagementModule { }
