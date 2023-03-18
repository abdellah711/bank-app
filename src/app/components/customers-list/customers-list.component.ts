import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from 'src/app/models/customer.model';
import { CustomerCardComponent } from '../customer-card/customer-card.component';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { CustomersService } from 'src/app/customers.service';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [CommonModule, CustomerCardComponent, ModalComponent],
  templateUrl: './customers-list.component.html',
  styles: [
  ]
})
export class CustomersListComponent {
  @Input() customers?: Customer[]
  @Input() isLoading?: boolean
  @Input() error?: string

  @Output() delete = new EventEmitter<Customer>()

  customerToDelete?: Customer
  isDeleting = false

  constructor(private customersService: CustomersService) { }

  onDelete(customer: Customer) {
    this.customerToDelete = customer
  }

  deleteCustomer() {
    if(!this.customerToDelete) return
    this.isDeleting = true
    this.customersService.deleteCustomer(this.customerToDelete.id).subscribe(() => {
      this.delete.emit(this.customerToDelete)
      this.isDeleting = false
      this.customerToDelete = undefined
    })
  }

  closeModal() {
    this.customerToDelete = undefined
  }
}
