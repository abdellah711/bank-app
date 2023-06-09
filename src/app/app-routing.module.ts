import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerRouteComponent } from './create-customer-route/create-customer-route.component';
import { CustomerDetailsRouteComponent } from './customer-details-route/customer-details-route.component';
import { CustomersRouteComponent } from './customers-route/customers-route.component';
import { DashboardRouteComponent } from './dashboard-route/dashboard-route.component';
import { EditCustomerRouteComponent } from './edit-customer-route/edit-customer-route.component';
import { SearchRouteComponent } from './search-route/search-route.component';

const routes: Routes = [
  { path: '', component: DashboardRouteComponent },
  { path: 'customers', component: CustomersRouteComponent },
  { path: 'customers/new', component: CreateCustomerRouteComponent },
  { path: 'search/:query', component: SearchRouteComponent },
  { path: 'customers/:id', component: CustomerDetailsRouteComponent },
  { path: 'customers/:id/edit', component: EditCustomerRouteComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
