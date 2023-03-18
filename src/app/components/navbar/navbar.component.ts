import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AppRoutingModule, FormsModule],
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {

  query: string = ''

  constructor(private router: Router) { }

  onSearch() {
    this.router.navigate(['/search', this.query])
    this.query = ''
  }

}
