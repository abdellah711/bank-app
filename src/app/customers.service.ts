import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models/customer.model';


const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }



  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${BASE_URL}/customers`);
  }

}
