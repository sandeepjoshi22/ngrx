import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CustomerActions from '../store/app.actions';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer = '';
  constructor(
    private store: Store<{customerList: []}>
  ) { }
  ngOnInit() {
  }

  addCustomer(customer: string): void {
    console.log(customer);
    this.store.dispatch(new CustomerActions.CustomerAdd(customer));
  }
}
