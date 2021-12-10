import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-parking-lot',
  templateUrl: './add-parking-lot.component.html',
  styleUrls: ['./add-parking-lot.component.css']
})
export class AddParkingLotComponent implements OnInit {

  addParkingLotInformation!: FormGroup
  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.addParkingLotInformation = this.formBuider.group({
      parkingName: [],
      place:[],
      area: [],
      price:[],
    })
  }

  addNewParkingLot(){
    console.log(this.addParkingLotInformation.value);
  }

}
