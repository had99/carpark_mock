import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  dataSource = new MatTableDataSource<TripList>(tripLists);
  nameColumn: string [] = [
    'No',
    'Destination',
    'Departure time',
    'Driver',
    'Car type',
    'Booked ticket number',
    'Action',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface TripList {
  id: number;
  destination: string;
  departureTime: string;
  driver: string;
  carType: string;
  bookedTicketNumber: number;
}

const tripLists: TripList[] = [
  { id: 7, destination: 'Gia Lai', departureTime: '10:30', driver: 'Tran Van Loc', carType: 'Giuong Nam 50 Cho', bookedTicketNumber: 0 },
  { id: 8, destination: 'Khanh Hoa', departureTime: '11:00', driver: 'Tran Cong Phuc', carType: 'Giuong Nam 50 Cho', bookedTicketNumber: 0 },
  { id: 9, destination: 'Nam Dinh', departureTime: '14:00', driver: 'Nguyen Van Vinh', carType: 'Giuong Nam 50 Cho', bookedTicketNumber: 0 },
]