import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-form.component.html',
  styles: [
  ]
})
export class CustomerFormComponent {

  @Input() customerForm!: FormGroup
  
  @Output() submit = new EventEmitter()

  getControl(controlName: string) {
    return this.customerForm.get(controlName);
  }

}
