import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  addTicketInformation!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addTicketInformation = this.formBuilder.group({
      customer: [],
      bookingTime: [],
      trip: [],
      licnsePlate: [],
    })
  }

  addNewTicket(){
    console.log(this.addTicketInformation.value);
  }
}
