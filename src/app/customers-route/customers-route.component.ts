import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../customers.service';
import { Customer } from '../models/customer.model';
import { CustomersListComponent } from '../components/customers-list/customers-list.component';

@Component({
  selector: 'app-customers-route',
  standalone: true,
  imports: [CommonModule,CustomersListComponent],
  templateUrl: './customers-route.component.html',
  styles: [
  ]
})
export class CustomersRouteComponent {

  customers?:Customer[]
  isLoading = true
  error?: string

  constructor(private customersService: CustomersService) { }


  ngOnInit(): void {
    this.customersService.getAllCustomers().subscribe({
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
