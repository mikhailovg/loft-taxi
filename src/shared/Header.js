import React from 'react';

import {
    Button,
} from '@material-ui/core';

import logo from '../header-logo.svg';

export const Header = ({setPage}) => {
    return (
        <div className="Header">

            <p className="HeaderLogo">
                <img src={logo} width="156" alt="Logo"/>
            </p>

            <Button color="primary" onClick={() => setPage("map")}>Карта</Button>
            <Button color="primary" onClick={() => setPage("profile")}>Профиль</Button>
            <Button color="primary" onClick={() => setPage("login")}>Вход</Button>
            <Button color="primary" onClick={() => setPage("registration")}>Регистрация</Button>
        </div>
    )
}