import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {

  addTripInformation!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addTripInformation = this.formBuilder.group({
      destination: [],
      departureTime: [],
      driver: [],
      carType:[],
      maximumOnlineTicketNumber:[],
      departureDate: [],
    })
  }

  addNewTrip(){
    console.log(this.addTripInformation.value);
    
  }
}
