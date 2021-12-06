import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';

const routes: Routes = [
  { path: 'car-list', component: CarListComponent },
  { path: 'add-car', component: AddCarComponent },
]

@NgModule({
  declarations: [
    CarListComponent,
    AddCarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CarManagementModule { }
