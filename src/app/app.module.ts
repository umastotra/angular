import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './products/product_component';


@NgModule({
  // All Modules will be declared here
  imports: [
    BrowserModule
  
  ],
  // All components and services
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent
  ],
  // Only first component
  bootstrap: [AppComponent]
})
export class AppModule { }
