import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  dataSource = new MatTableDataSource<TicketList>(ticketLists);
  nameColumn: string [] = [
    'No',
    'Trip',
    'License plate',
    'Customer',
    'Booking time',
    'Action',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface TicketList {
  id: number;
  trip: string;
  licensePlate: string;
  customer: string;
  bookingTime: string;
}

const ticketLists: TicketList[] = [
  {id:1,trip:'Gia Lai', licensePlate:'29B-28221', customer:'Nguyen Phuong Lan', bookingTime:'11:00'},
  {id:2,trip:'Khanh Hoa', licensePlate:'29B-28221', customer:'Le Van Vinh', bookingTime:'12:30'},
  {id:3,trip:'Nam Dinh', licensePlate:'29B-28221', customer:'Pham Thu Hoai', bookingTime:'13:10'}
]
