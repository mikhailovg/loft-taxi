import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import {RegistrationForm} from "./RegistrationForm";

export const Registration = ({setPage}) => {
    return (
        <div className="Login">
            <div className="LoginColumn">
                <img src={logo} className="Logo" alt="logo" width={156}/>
            </div>

            <div className="LoginColumn">
                <RegistrationForm setPage={setPage}/>
            </div>

        </div>
    );
}
