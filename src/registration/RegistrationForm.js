import React from 'react'
import '../App.css'

import {
    Button,
    TextField
} from '@material-ui/core'
import {Link} from 'react-router-dom'

import {
    getRegister,
    fetchRegisterRequest,
} from '../modules/main'

import {shallowEqual, useSelector, useDispatch} from 'react-redux'
import history from '../history'

export const RegistrationForm = () => {

    const register = useSelector(getRegister, shallowEqual)
    const registerRequest = useSelector(fetchRegisterRequest, shallowEqual)

    const dispatch = useDispatch()

    if (register && register.success && JSON.parse(register.success) === true) {
        localStorage.setItem('registerSuccess', register.success)
        history.push('/map')
    }

    const onSubmit = (event) => {
        event.preventDefault()

        dispatch({
            ...registerRequest,
            payload: {
                email: event.target.login.value,
                password: event.target.password.value,
                name: event.target.name.value,
                surname: event.target.surname.value,
            }
        })
    }

    return (
        <div className={'LoginForm'}>
            <form onSubmit={onSubmit}>
                <div className={'LoginFormContainer'}>
                    <div className={'LoginFormItem'}>
                        <h1 className={'LoginTitle'}>Регистрация</h1>
                        <div className={'LoginLink'}>
                            <div>Уже зарегистрированы?</div>
                            <Link to={'/login'} className={'Link'}>
                                Войти
                            </Link>
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
                        name={'name'}
                    />
                    <TextField
                        required
                        label={'Фамилия'}
                        placeholder={'Фамилия'}
                        margin={'normal'}
                        name={'surname'}
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
                            className={'LoginButton'}>
                        Войти
                    </Button>
                </div>
            </form>

        </div>
    )
}