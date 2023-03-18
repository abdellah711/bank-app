import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Customer } from './models/customer.model';
import { Stats } from './models/stats.model';


const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }



  getAllCustomers(limit?: number): Observable<Customer[]> {
    const params = new URLSearchParams();
    limit && params.set('_limit', limit.toString());

    return this.http.get<Customer[]>(`${BASE_URL}/customers?${params.toString()}`);
  }


  getStats(): Observable<Stats> {
    return this.http.get<Customer[]>(`${BASE_URL}/customers`).pipe(map(customers => {
      const totalBalance = customers.reduce((acc, customer) => acc + customer.balance, 0)
      const totalCustomers = customers.length
      return { totalBalance, totalCustomers }
    }))
  }

  isCustomerExists(email: string): Observable<boolean> {
    return this.http.get<Customer[]>(`${BASE_URL}/customers?email=${email}`).pipe(map(customer => customer.length > 0));
  }

  createCustomer(customer: Omit<Customer, 'id'>): Observable<Customer> {
    return this.http.post<Customer>(`${BASE_URL}/customers`, customer);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${BASE_URL}/customers/${id}`);
  }

  search(query: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${BASE_URL}/customers?q=${query}`);
  }

}
