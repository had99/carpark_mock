import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Car } from '../model/car';


@Injectable({
    providedIn: 'root'
})

export class CarService {
    constructor(private httpClient: HttpClient) { }

    public getAllCar(): Car[] {
        return [
            {licensePlate: '28B-1128', carType:'Truong Hai', carColor:'Bac', company:'Hoang Long', parkingLot:'Bai So 2'},
            {licensePlate: '29B-28221', carType:'Huyndai', carColor:'Do', company:'Cam Van', parkingLot:'Bai So 3'},
            {licensePlate: '36B-09211', carType:'Huyndai', carColor:'Xanh', company:'Phuong Trang', parkingLot:'Bai So 1'}
        ]
    }
}