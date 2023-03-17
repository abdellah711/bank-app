import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from 'src/app/models/customer.model';
import { CustomerCardComponent } from '../customer-card/customer-card.component';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [CommonModule, CustomerCardComponent],
  templateUrl: './customers-list.component.html',
  styles: [
  ]
})
export class CustomersListComponent {
  @Input() customers?: Customer[]
  @Input() isLoading?: boolean
  @Input() error?: string




}
