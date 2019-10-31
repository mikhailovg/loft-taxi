import React from 'react';
import '../App.css';
import {AppConsumer} from '../App';

import {
    Button,
    TextField
} from '@material-ui/core';

export const LoginForm = ({setPage}) => {

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
                                    <h1 className={'LoginTitle'}>Войти</h1>
                                    <div className={'LoginLink'}>
                                        <div>Уже зарегистрированы?</div>
                                        <a onClick={() => setPage('registration')}
                                           className={'Link'}>Зарегистрируйтесь</a>
                                    </div>
                                </div>

                                <TextField
                                    required
                                    label={'Имя пользователя'}
                                    placeholder={'Имя пользователя'}
                                    margin={'normal'}
                                    name={'login'}
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
