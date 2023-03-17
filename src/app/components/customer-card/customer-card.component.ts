import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-card.component.html',
  styles: [
  ]
})
export class CustomerCardComponent {
  @Input() customer!: Customer;



}
