import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customer } from '../models/customer.model';
import { Stats } from '../models/stats.model';
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-dashboard-route',
  templateUrl: './dashboard-route.component.html',
  styles: [
  ]
})
export class DashboardRouteComponent implements OnInit {

  isLoading = true
  customers?: Customer[]
  stats?: Stats
  error?: string


  constructor(private customersService: CustomersService) { }




  ngOnInit(): void {
    forkJoin({
      stats: this.customersService.getStats(),
      customers: this.customersService.getAllCustomers(12),
    }).subscribe({
      next: ({ customers, stats }) => {
        this.customers = customers
        this.stats = stats
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

  onDelete(customer: Customer) {
    this.customers = this.customers?.filter(c => c.id !== customer.id)
  }
}