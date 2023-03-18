import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomersService } from '../customers.service';
import { Customer } from '../models/customer.model';
import { CustomersListComponent } from '../components/customers-list/customers-list.component';


@Component({
  selector: 'app-search-route',
  standalone: true,
  imports: [CommonModule, RouterModule, CustomersListComponent],
  templateUrl: './search-route.component.html',
})
export class SearchRouteComponent implements OnInit {

  query: string = ''
  customers?: Customer[]
  isLoading = true

  constructor(private route: ActivatedRoute, private customersService: CustomersService) {
  }

  ngOnInit() {
    this.route.params.pipe(switchMap(params => {
      this.isLoading = true
      this.query = params['query']
      return this.customersService.search(params['query'])
    })).subscribe(result => {
      this.isLoading = false
      this.customers = result
    })
  }

}
