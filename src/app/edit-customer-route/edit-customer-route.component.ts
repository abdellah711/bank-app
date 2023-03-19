import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../models/customer.model';
import { CustomersService } from '../customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomerFormComponent } from '../components/customer-form/customer-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer-route',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent],
  templateUrl: './edit-customer-route.component.html',
  styles: [
  ]
})
export class EditCustomerRouteComponent implements OnInit {
  customer?: Customer
  isLoading = true
  isEditing = false
  error?: string

  customerForm?: FormGroup

  constructor(private customersService: CustomersService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.pipe(switchMap(params => {
      this.isLoading = true
      return this.customersService.getCustomerById(params['id'])
    })).subscribe(data => {
      this.isLoading = false
      this.customer = data
      this.customerForm = this.formBuilder.group({
        firstName: [data.firstName, [Validators.required]],
        lastName: [data.lastName, [Validators.required]],
        email: [data.email, [Validators.required]], //[this.validateEmail.bind(this)]],
        address: [data.address, [Validators.required]],
        balance: [data.balance, [Validators.required, Validators.min(0)]],
        gender: [data.gender],
        'account-type': [data['account-type']],
      })
    })
  }

  onSubmit() {
    this.isEditing = true
    this.error = undefined;
    this.customersService.editCustomer(this.customer!.id, this.customerForm!.value).subscribe({
      next: () => {
        this.router.navigate(['/customers'])
      },
      error: () => {
        this.error = 'Something went wrong!'
      },
      complete: () => {
        this.isEditing = false
      }
    })
  }
}
