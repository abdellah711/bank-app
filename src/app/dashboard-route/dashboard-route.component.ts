import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-dashboard-route',
  templateUrl: './dashboard-route.component.html',
  styles: [
  ]
})
export class DashboardRouteComponent implements OnInit {

  isLoading = true
  customers?: Customer[]
  error?: string


  constructor(private customersService: CustomersService) { }




  ngOnInit(): void {
    this.customersService.getAllCustomers()
      .subscribe({
        next: (data) => {
          this.customers = data
        },
        error: (err) => {
          if (err instanceof Error) {
            this.error = err.message
          }
        },
        complete: () => {
          this.isLoading = false
        }
      });
  }

}