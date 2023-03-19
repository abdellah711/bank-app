import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomersService } from '../customers.service';
import { Customer } from '../models/customer.model';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-customer-details-route',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent],
  templateUrl: './customer-details-route.component.html',
  styles: [
  ]
})
export class CustomerDetailsRouteComponent implements OnInit {

  customer?: Customer
  isLoading = true
  isDeleting = false
  showDeleteModal = false

  constructor(private route: ActivatedRoute, private customersService: CustomersService,private router: Router) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap(params => {
        this.isLoading = true
        return this.customersService.getCustomerById(params['id'])
      }))
      .subscribe(data => {
        this.customer = data
        this.isLoading = false
      })
  }

  openModal() {
    this.showDeleteModal = true
  }

  closeModal() {
    this.showDeleteModal = false
  }

  deleteCustomer() {
    this.isDeleting = true
    this.customersService.deleteCustomer(this.customer!.id)
      .subscribe(() => {
        this.isDeleting = false
        this.router.navigate(['/customers'])
      })
  }

}
