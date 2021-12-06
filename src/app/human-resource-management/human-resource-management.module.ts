import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  { path: '', redirectTo: 'view-employee', pathMatch: 'full' },
  { path: 'view-employee', component: ViewEmployeeComponent },
  { path: 'add-new-employee', component: AddEmployeeComponent },
];

@NgModule({
  declarations: [
    ViewEmployeeComponent,
    AddEmployeeComponent
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
export class HumanResourceManagementModule { }
