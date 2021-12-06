import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-parking-lot-list',
  templateUrl: './parking-lot-list.component.html',
  styleUrls: ['./parking-lot-list.component.css']
})
export class ParkingLotListComponent implements OnInit {

  dataSource = new MatTableDataSource<ParkingLot>(parkingLots);
  nameColumn: string[] = [
    'ID',
    'Parking lot',
    'Place',
    'Area',
    'Price',
    'Status',
    'Action',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

export interface ParkingLot {
  id: number;
  parkingLot: string;
  place: string;
  area: number;
  price: number;
  status: string;
}

const parkingLots: ParkingLot[] = [
  { id: 1, parkingLot: 'Bai so 1', place: 'Khu Dong', area: 20, price: 2500000, status: 'Blank' },
  { id: 2, parkingLot: 'Bai so 2', place: 'Khu Tay', area: 30, price: 5000000, status: 'Blank' },
  { id: 3, parkingLot: 'Bai so 3', place: 'Khu Nam', area: 50, price:10000000, status: 'Blank' },
]
