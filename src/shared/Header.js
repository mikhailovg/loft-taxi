import React from 'react';

import {
    Button,
} from '@material-ui/core';

import logo from '../header-logo.svg';
import {AppConsumer} from '../App';

export const Header = ({setPage}) => {
    return (
        <AppConsumer>
            {context => {
                return (
                    <div className={'Header'}>

                        <p className={'HeaderLogo'}>
                            <img src={logo} width={'156'} alt={'Logo'}/>
                        </p>

                        <Button color={'primary'} onClick={() => setPage('map')}>Карта</Button>
                        <Button color={'primary'} onClick={() => setPage('profile')}>Профиль</Button>

                        {context.isLoggedIn ?

                            <Button id={'LogoutButton'}
                                    color={'primary'}
                                    onClick={() => {
                                        context.logout()
                                    }}>
                                Выход
                            </Button> :

                            <Button id={'LoginButton'}
                                    color={'primary'}
                                    onClick={() => {
                                        setPage('login')
                                    }}>
                                Войти
                            </Button>
                        }
                    </div>
                )
            }}
        </AppConsumer>
    )
}