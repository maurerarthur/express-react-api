import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {

    return(
        <div className="container">
            <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Email" name="email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </div>
    );

}