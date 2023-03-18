import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent {
  @Input() title?: string
  @Input() body?: string
  
  @Output() close = new EventEmitter<void>()

  onClose(event: Event) {
    if(event.target === event.currentTarget) {
      this.close.emit()
    }
  }

}
