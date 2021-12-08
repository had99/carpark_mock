import { Employee } from './../../model/employee';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  // employees: Employee [] = [];
  dataSource:any;
  nameColumn: string[] = [
    'ID',
    'Name',
    'Date of birth',
    'Address',
    'Phone number',
    'Department',
    'Action',
  ];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  //Get employee
  getEmployee(){
    this.dataSource = new MatTableDataSource(this.employeeService.getAllEmployee());
  }
}

// export interface Employee {
//   id: number;
//   name: string;
//   dateOfBirth: string;
//   address: string;
//   phoneNumber: string;
//   department: string;
// }

// const employees: Employee [] =[
//   {id: 1, name:'Nguyen Van Linh', dateOfBirth:'1994-09-08', address:'Hai Chau, Da Nang', phoneNumber:'901292', department:'employee'},
//   {id: 2, name:'Nguyen Thi Lan', dateOfBirth:'1994-02-08', address:'Tam Ky, Quang Nam', phoneNumber:'901292', department:'parking'},
//   {id: 3, name:'Pham Van Thanh', dateOfBirth:'1994-01-08', address:'Phu Vang, Hue', phoneNumber:'901292', department:'services'},
// ]
