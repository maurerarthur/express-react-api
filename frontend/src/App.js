import React from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './dashboard/index.js';

export default function App() {

  	axios.get("http://localhost:8000/api").then(res => {
		console.log(res.data);
  	});

	return(
		<div className="App w-100 h-100">
			<Dashboard />
		</div>
  	);

}