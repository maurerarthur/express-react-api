import React, { useState } from 'react';
import Axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateAccount() {

    const [isSignedUp, setIsSignedUp] = useState(false);

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const setUserDataHandler = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value});
    }

    const postUserData = () => {

        // Object.values(userData).forEach(i => {
        //     if(i != "") {
        //         Axios.put("http://localhost:8000/api/users", userData).then(res => {
        //             if(res.data.status == 200) {
        //                 setIsSignedUp(true);
        //             }
        //         });
        //     }
        // });

        setIsSignedUp(true);

    }

    return(

        isSignedUp ?

        <div class="alert alert-primary" role="alert">
            Account successfully created! Proceed to Sign In
        </div>

        :

        <form className="container">
            <div className="form-group">
                <label>Username</label>
                <input required type="text" className="form-control" placeholder="Username" name="name" onChange={setUserDataHandler} />
            </div>
            <div className="form-group">
                <label>Email Address</label>
                <input required type="email" className="form-control" placeholder="Email" name="email" onChange={setUserDataHandler} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input required type="password" className="form-control" placeholder="Password" name="password" onChange={setUserDataHandler} />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={postUserData}>Submit</button>
        </form>

    );

}