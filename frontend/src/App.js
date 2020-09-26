import React from 'react';
import './App.css';
import axios from 'axios';
import CreateAccount from './users/createAccount.js';

export default function App() {

  	axios.get("http://localhost:8000/api").then(res => {
		console.log(res.data);
  	});

	return(
		<div className="App w-100 h-100">
			<CreateAccount />
		</div>
  	);

}