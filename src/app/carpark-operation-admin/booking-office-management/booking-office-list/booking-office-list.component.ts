import { Employee } from './../../../human-resource-management/view-employee/view-employee.component';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-office-list',
  templateUrl: './booking-office-list.component.html',
  styleUrls: ['./booking-office-list.component.css']
})
export class BookingOfficeListComponent implements OnInit {

  dataSource = new MatTableDataSource<Office>(offices);
  nameColumn: string [] =[
    'ID',
    'Booking office',
    'Trip',
    'Action',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Office {
  id: number;
  bookingOffice: string;
  trip: string;
}

const offices: Office[] = [
  { id: 10, bookingOffice: 'Phuong Tang', trip: 'Gia Lai' },
  { id: 11, bookingOffice: 'Phuong Nam', trip: 'Khanh Hoa' },
  { id: 12, bookingOffice: 'Hoai Phuong', trip: 'Nam Dinh' },
]
