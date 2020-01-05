import * as CustomerActions from './app.actions';

const initialState = [];

export function customerReducer(
    state = initialState, action: CustomerActions.CustomerActions
) {
    switch (action.type) {
        case CustomerActions.CUSTOMER_ADD: {
            return [...state, action.payload];
            }
        case CustomerActions.CUSTOMER_REMOVE: {
            return [...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)];
        }
        default: return state;

    }
}
