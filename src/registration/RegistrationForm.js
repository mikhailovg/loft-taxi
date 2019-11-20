import React, {useEffect, useState} from 'react'
import '../App.css'

import {
    Button,
} from '@material-ui/core'
import {Link} from 'react-router-dom'

import {
    getRegister,
    fetchRegisterRequest,
} from '../modules/main'

import {shallowEqual, useSelector, useDispatch} from 'react-redux'
import history from '../history'
import {Form, Field} from 'react-final-form'
import { TextField } from 'mui-rff'

export const RegistrationForm = () => {

    const register = useSelector(getRegister, shallowEqual)
    const registerRequest = useSelector(fetchRegisterRequest, shallowEqual)

    const [state, setState] = useState({
        isErrorVisible: false,
    })

    useEffect(() => {
        if (register && register.error) {
            setState({...state, isErrorVisible: true})
        }
    }, [register])

    useEffect(() => {
        setState({...state, isErrorVisible: false})
    }, [])

    const dispatch = useDispatch()

    if (register && register.success && JSON.parse(register.success) === true) {
        localStorage.setItem('registerSuccess', register.success)
        localStorage.setItem('authToken', register.token)
        history.push('/map')
    }

    const handleSubmit = (values) => {
        dispatch({
            ...registerRequest,
            payload: {
                email: values.login,
                password: values.password,
                name: values.name,
                surname: values.surname,
            }
        })
    }

    const showError = () => {
        setTimeout(() => {
            setState({...state, isErrorVisible: false})
        }, 5000)
        return (
            <div className={'Error'}>{register && register.error ? register.error : 'Ошибка, пользователь существует'}</div>
        )
    }

    return (
        <div className={'LoginForm'}>
            <Form
                onSubmit={handleSubmit}
                validate={values => {
                    let errors = {}
                    if (!values.login || !/\S+@\S+\.\S+/.test(values.login)) {
                        errors.login = 'Введите существующий email'
                    }
                    if (!values.password) {
                        errors.password = 'Пароль не должен быть пустым'
                    }
                    if (!values.name) {
                        errors.name = 'Имя не должен быть пустым'
                    }
                    if (!values.surname) {
                        errors.surname = 'Фамилия не должна быть пустой'
                    }
                    return errors
                }}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
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

                            <Field
                                component={TextField}
                                required
                                label={'Адрес электронной почты'}
                                placeholder={'Адрес электронной почты'}
                                margin={'normal'}
                                name={'login'}
                            />
                            <Field
                                component={TextField}
                                required
                                label={'Имя'}
                                placeholder={'Имя'}
                                margin={'normal'}
                                name={'name'}
                            />
                            <Field
                                component={TextField}
                                required
                                label={'Фамилия'}
                                placeholder={'Фамилия'}
                                margin={'normal'}
                                name={'surname'}
                            />

                            <Field
                                component={TextField}
                                required
                                label={'Пароль'}
                                placeholder={'Пароль'}
                                margin={'normal'}
                                name={'password'}
                                type={'password'}
                            />

                            {state.isErrorVisible ? showError() : null}

                            <Button type={'submit'} variant={'contained'} color={'primary'}
                                    className={'LoginButton LoginButtonMargin'}>
                                Войти
                            </Button>
                        </div>
                    </form>
                )}
            />
        </div>
    )

}