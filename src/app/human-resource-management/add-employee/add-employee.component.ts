import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addNewEmployeeInfomationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addNewEmployeeInfomationForm = this.formBuilder.group({
      fullName: [],
      phoneNumber: [],
      dateOfBirth: [],
      sex: [],
      address: [],
      email: [],
      account: [],
      password: [],
      department: [],
    });
  }

  addNewEMployee(){
    console.log(this.addNewEmployeeInfomationForm.value);
    
  }

}
