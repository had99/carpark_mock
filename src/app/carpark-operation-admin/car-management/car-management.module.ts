import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

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
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forChild(routes),
  ]
})
export class CarManagementModule { }
