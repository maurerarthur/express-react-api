import App from './App.js';
import Login from './users/login.js';
import CreateAccount from './users/createAccount.js';

const routes = [
    {
        path: "/",
        component: App
    },
    {
        path: "/signin",
        component: Login
    },
    {
        path: "/signup",
        component: CreateAccount
    }
];

export default routes;