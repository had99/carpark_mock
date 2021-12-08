import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Employee } from '../model/employee';


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private httpClient: HttpClient) { }

    public getAllEmployee(): Employee[] {
        // const headers = { 'content-type': 'application/json' }
        // // let params = new HttpParams()
        // //   .set('page', page)
        // //   .set('size', size);
        // return this.httpClient.get<any[]>(`${environment.apiUrl}/api/employee/getAll?page=0&size=3`,{ 'headers': headers });
        return [
            { employee_id: 1, account: 'Nguyen Van Linh', employee_birthdate: '1994-09-08', employee_address: 'Hai Chau, Da Nang', employee_phone: '901292', department: 'employee' },
            { employee_id: 2, account: 'Nguyen Thi Lan', employee_birthdate: '1994-02-08', employee_address: 'Tam Ky, Quang Nam', employee_phone: '901292', department: 'parking' },
            { employee_id: 3, account: 'Pham Van Thanh', employee_birthdate: '1994-01-08', employee_address: 'Phu Vang, Hue', employee_phone: '901292', department: 'services' },
        ]
    }
}