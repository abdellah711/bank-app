import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatsComponent } from './components/stats/stats.component';
import { DashboardRouteComponent } from './dashboard-route/dashboard-route.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomerCardComponent,
    NavbarComponent,
    CustomersListComponent,
    StatsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
