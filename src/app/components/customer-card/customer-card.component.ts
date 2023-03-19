import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from 'src/app/models/customer.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './customer-card.component.html',
  styles: [
  ]
})
export class CustomerCardComponent {
  @Input() customer!: Customer;
  @Output() delete = new EventEmitter<Customer>()

  onDelete() {
    this.delete.emit(this.customer)
  }
}
