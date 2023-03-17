import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersRouteComponent } from './customers-route/customers-route.component';
import { DashboardRouteComponent } from './dashboard-route/dashboard-route.component';

const routes: Routes = [
  { path: '', component: DashboardRouteComponent },
  { path: 'customers', component: CustomersRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
