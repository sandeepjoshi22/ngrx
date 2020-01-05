import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { customerReducer } from './store/app.reducers';



@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({customerList: customerReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
