import React from 'react';
import '../App.css';

import {
    Button,
    TextField
} from '@material-ui/core';
import {AppConsumer} from '../App';

export const RegistrationForm = ({setPage}) => {

    return (
        <AppConsumer>
            {context => {

                const onSubmit = (event) => {
                    event.preventDefault()
                    context.login(event.target.login.value, event.target.password.value)
                }

                return (

                    <div className={'LoginForm'}>

                        <form onSubmit={onSubmit}>
                            <div className={'LoginFormContainer'}>
                                <div className={'LoginFormItem'}>
                                    <h1 className={'LoginTitle'}>Регистрация</h1>
                                    <div className={'LoginLink'}>
                                        <div>Уже зарегистрированы?</div>
                                        <a onClick={() => setPage("login")} className={'Link'}>Войти</a>
                                    </div>
                                </div>

                                <TextField
                                    required
                                    label={'Адрес электронной почты'}
                                    placeholder={'Адрес электронной почты'}
                                    margin={'normal'}
                                    name={'login'}
                                />
                                <TextField
                                    required
                                    label={'Имя'}
                                    placeholder={'Имя'}
                                    margin={'normal'}
                                    name={'firstName'}
                                />
                                <TextField
                                    required
                                    label={'Фамилия'}
                                    placeholder={'Фамилия'}
                                    margin={'normal'}
                                    name={'lastName'}
                                />

                                <TextField
                                    required
                                    label={'Пароль'}
                                    placeholder={'Пароль'}
                                    margin={'normal'}
                                    name={'password'}
                                    type={'password'}
                                />

                                <Button type={'submit'} variant={'contained'} color={'primary'} className={'LoginButton'}>
                                    Войти
                                </Button>
                            </div>
                        </form>

                    </div>
                )
            }}
        </AppConsumer>
    )
}
