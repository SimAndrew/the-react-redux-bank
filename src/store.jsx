import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import accountReducer from './features/accounts/accountSlice.jsx';
import customerReducer from './features/customers/customerSlice.jsx';

const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
