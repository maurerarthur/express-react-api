import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './users/login.js';
import CreateAccount from './users/createAccount.js';

export default function App() {

  	axios.get("http://localhost:8000/api/users").then(res => {
		console.log(res.data);
  	});

	return(
		<Router className="App w-100 h-100 d-flex align-items-center justify-content-center">
			<CreateAccount className="w-100 h-100" />
			<Switch>
				<Route path="/signin" component={Login} exact />
				<Route path="/signup" component={CreateAccount} />
			</Switch>
		</Router>
  	);

}