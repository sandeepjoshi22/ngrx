import { Action } from '@ngrx/store';

export const CUSTOMER_ADD = '[Customer] Customer Add';
export const CUSTOMER_REMOVE = '[Customer] Customer Remove';

export class CustomerAdd implements Action {
    readonly type = CUSTOMER_ADD;

    constructor(public payload: string) {}
}

export class CustomerRemove implements Action {
    readonly type = CUSTOMER_REMOVE;

    constructor(public payload: number) {}
}

export type CustomerActions = CustomerAdd | CustomerRemove;
