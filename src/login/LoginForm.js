import React from 'react'
import '../App.css'

import {
    Button,
    TextField
} from '@material-ui/core'
import {Link} from 'react-router-dom'

import {
    getAuth,
    fetchAuthRequest,
} from '../modules/main'

import {shallowEqual, useSelector, useDispatch} from 'react-redux'
import history from '../history'

export const LoginForm = () => {

    const auth = useSelector(getAuth, shallowEqual)
    const authRequest = useSelector(fetchAuthRequest, shallowEqual)

    const dispatch = useDispatch()

    if (auth && auth.success && JSON.parse(auth.success) === true) {
        localStorage.setItem('authSuccess', auth.success)
        localStorage.setItem('authToken', auth.token)
        history.push('/map')
    }

    const onSubmit = (event) => {
        event.preventDefault()

        dispatch({
            ...authRequest,
            payload: {
                email: event.target.login.value,
                password: event.target.password.value
            }
        })
    }

    return (
        <div className={'LoginForm'}>
            <form onSubmit={onSubmit}>
                <div className={'LoginFormContainer'}>

                    <div className={'LoginFormItem'}>
                        <h1 className={'LoginTitle'}>Войти</h1>
                        <div className={'LoginLink'}>
                            <div>Уже зарегистрированы?</div>
                            <Link to={'/registration'} className={'Link'}>
                                Зарегистрируйтесь
                            </Link>
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

                    <Button type={'submit'} variant={'contained'} color={'primary'}
                            className={'LoginButton LoginButtonMargin'}>
                        Войти
                    </Button>

                </div>
            </form>

        </div>
    )
}
