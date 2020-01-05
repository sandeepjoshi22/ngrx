import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CustomerActions from '../store/app.actions';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: Observable<[]>;

  constructor(
    private store: Store<{customerList: []}>
  ) { }

  ngOnInit() {
    this.customers = this.store.select('customerList');
  }

  removeCustomer(index: number): void {
    console.log('index', index);
    this.store.dispatch(new CustomerActions.CustomerRemove(index));
  }
}
