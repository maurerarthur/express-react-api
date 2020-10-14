import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import CreateAccount from './users/createAccount.js';

export default function App() {

  	axios.get("http://localhost:8000/api/users").then(res => {
		console.log(res.data);
  	});

	return(
		<HashRouter>
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/signin">Sign In</NavLink></li>
				<li><NavLink to="/signup">Sign Up</NavLink></li>
			</ul>
		</HashRouter>
		// <div className="App w-100 h-100 d-flex align-items-center justify-content-center">
		// 	<CreateAccount className="w-100 h-100" />
		// </div>
  	);

}