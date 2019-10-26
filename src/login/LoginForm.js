import React from 'react';
import '../App.css';

import {
    Button,
    TextField
} from '@material-ui/core';

export const LoginForm = ({setPage}) => {

    const onSubmit = (e) => {
        e.preventDefault()
        setPage("profile")
    }

    return (

        <div className="LoginForm">

            <form onSubmit={onSubmit}>
                <div className="LoginFormContainer">

                    <div className="LoginFormItem">
                        <h1 className="LoginTitle">Войти</h1>
                        <div className="LoginLink">
                            <div>Уже зарегистрированы?</div>
                            <a onClick={() => setPage("registration")} className="Link">Зарегистрируйтесь</a>
                        </div>
                    </div>

                    <TextField
                        required
                        label="Имя пользователя"
                        placeholder="Имя пользователя"
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
