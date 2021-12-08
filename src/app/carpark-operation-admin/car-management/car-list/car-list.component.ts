import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  dataSource: any;
  nameColumn: string[] = [
    'License plate',
    'Car type',
    'Car color',
    'Company',
    'Parking lot',
    'Action',
  ]
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
    this.dataSource = new MatTableDataSource(this.carService.getAllCar());
  }

}
