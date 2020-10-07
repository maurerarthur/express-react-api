import React from 'react';
import CreateAccount from './users/createAccount.js';
import Login from './users/login.js';

const Routes = {
    "/signup": () => <CreateAccount />,
    "/signin": () => <Login />
};

export default Routes;