import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingOfficeListComponent } from './booking-office-list/booking-office-list.component';
import { AddBookingOfficeComponent } from './add-booking-office/add-booking-office.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

const routes: Routes = [
  { path: 'booking-office-list', component: BookingOfficeListComponent },
  { path: 'add-booking-office', component: AddBookingOfficeComponent }
];

@NgModule({
  declarations: [
    BookingOfficeListComponent,
    AddBookingOfficeComponent
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
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    RouterModule.forChild(routes),
  ]
})
export class BookingOfficeManagementModule { }
