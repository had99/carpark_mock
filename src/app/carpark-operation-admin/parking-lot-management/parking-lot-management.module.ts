import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingLotListComponent } from './parking-lot-list/parking-lot-list.component';
import { AddParkingLotComponent } from './add-parking-lot/add-parking-lot.component';

const routes: Routes = [
  { path: 'parking-lot-list', component: ParkingLotListComponent },
  { path: 'add-parking-lot', component: AddParkingLotComponent }
];

@NgModule({
  declarations: [
    ParkingLotListComponent,
    AddParkingLotComponent
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
export class ParkingLotManagementModule { }
