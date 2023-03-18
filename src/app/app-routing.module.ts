import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerRouteComponent } from './create-customer-route/create-customer-route.component';
import { CustomersRouteComponent } from './customers-route/customers-route.component';
import { DashboardRouteComponent } from './dashboard-route/dashboard-route.component';

const routes: Routes = [
  { path: '', component: DashboardRouteComponent },
  { path: 'customers', component: CustomersRouteComponent },
  { path: 'customers/new', component: CreateCustomerRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
