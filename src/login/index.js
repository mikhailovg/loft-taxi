import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import {LoginForm} from "./LoginForm";

export const Login = ({setPage}) => {
    return (
        <div className="Login">
            <div className="LoginColumn">
                <img src={logo} className="Logo" alt="logo" width={156}/>
            </div>

            <div className="LoginColumn">
                <LoginForm setPage={setPage}/>
            </div>

        </div>
    );
}
