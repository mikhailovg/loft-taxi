import React from 'react';
import '../App.css';

import {
    Button,
    TextField
} from '@material-ui/core';

export const RegistrationForm = ({setPage}) => {

    const onSubmit = (e) => {
        e.preventDefault()
        setPage("profile")
    }

    return (

        <div className="LoginForm">

            <form onSubmit={onSubmit}>
                <div className="LoginFormContainer">
                    <div className="LoginFormItem">
                        <h1 className="LoginTitle">Регистрация</h1>
                        <div className="LoginLink">
                            <div>Уже зарегистрированы?</div>
                            <a onClick={() => setPage("login")} className="Link">Войти</a>
                        </div>
                    </div>

                    <TextField
                        required
                        label="Адрес электронной почты"
                        placeholder="Адрес электронной почты"
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Имя"
                        placeholder="Имя"
                        margin="normal"
                    />
                    <TextField
                        required
                        label="Фамилия"
                        placeholder="Фамилия"
                        margin="normal"
                    />

                    <TextField
                        required
                        label="Пароль"
                        placeholder="Пароль"
                        margin="normal"
                    />

                    <Button type="submit" variant="contained" color="primary" className="LoginButton">
                        Войти
                    </Button>
                </div>
            </form>

        </div>
    );
}
