import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { debounceTime, map } from 'rxjs';
import { Router } from '@angular/router';
import { CustomerFormComponent } from '../components/customer-form/customer-form.component';

@Component({
  selector: 'app-create-customer-route',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent],
  templateUrl: './create-customer-route.component.html',
  styles: [
  ]
})
export class CreateCustomerRouteComponent {

  customerForm: FormGroup
  isCreating = false
  error?: string

  constructor(private formBuilder: FormBuilder, private customersService: CustomersService, private router: Router) {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required], [this.validateEmail.bind(this)]],
      address: ['', [Validators.required]],
      balance: [0, [Validators.required, Validators.min(0)]],
      gender: ['Male'],
      'account-type': ['checking'],
    })
  }


  onSubmit() {
    this.isCreating = true
    this.error = undefined;
    this.customersService.createCustomer(this.customerForm.value).subscribe({
      next: () => {
        this.customerForm.reset();
        this.router.navigate(['/customers'])
      },
      error: () => {
        this.error = 'Something went wrong!'
      },
      complete: () => {
        this.isCreating = false
      }
    })
  }

  getControl(controlName: string) {
    return this.customerForm.get(controlName);
  }

  validateEmail(control: AbstractControl) {
    return this.customersService.isCustomerExists(control.value).pipe(map(exists => exists ? { emailExists: true } : null));
  }

}
