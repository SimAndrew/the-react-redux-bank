import CreateCustomer from './features/customers/CreateCustomer.jsx';
import Customer from './features/customers/Customer.jsx';
import AccountOperations from './features/accounts/AccountOperations.jsx';
import BalanceDisplay from './features/accounts/BalanceDisplay.jsx';
import './App.css';

export default function App() {
	return (
		<div>
			<h1>🏦 The React-Redux Bank ⚛️</h1>
			<CreateCustomer />
			<Customer />
			<AccountOperations />
			<BalanceDisplay />
		</div>
	);
}
