import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateAccount() {

    return(
        <div className="container">
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <label>Email Address</label>
                <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
        </div>
    );

}