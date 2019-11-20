import React, {useEffect, useState} from 'react'
import '../App.css'

import {
    Button
} from '@material-ui/core'
import {Link} from 'react-router-dom'

import {
    getAuth,
    fetchAuthRequest,
    getAuthIsLoading,
} from '../modules/main'

import {shallowEqual, useSelector, useDispatch} from 'react-redux'
import history from '../history'
import {Form, Field} from 'react-final-form'
import { TextField } from 'mui-rff'

export const LoginForm = () => {

    const auth = useSelector(getAuth, shallowEqual)
    const authIsLoading = useSelector(getAuthIsLoading, shallowEqual)
    const authRequest = useSelector(fetchAuthRequest, shallowEqual)

    const [state, setState] = useState({
        isErrorVisible: false,
    })

    useEffect(() => {
        if (auth && auth.error) {
            setState({...state, isErrorVisible: true})
        }
    }, [auth])

    useEffect(() => {
        setState({...state, isErrorVisible: false})
    }, [])

    const dispatch = useDispatch()

    if (auth && auth.success && JSON.parse(auth.success) === true) {
        localStorage.setItem('authSuccess', auth.success)
        localStorage.setItem('authToken', auth.token)
        history.push('/map')
    }

    const handleSubmit = (values) => {
        dispatch({
            ...authRequest,
            payload: {
                email: values.login,
                password: values.password
            }
        })
    }

    const showError = () => {
        setTimeout(() => {
            setState({...state, isErrorVisible: false})
        }, 5000)
        return (
            <div className={'Error'}>Пользователя с таким паролем не найдено</div>
        )
    }

    return (
        <div className={'LoginForm'} data-testid={'LoginForm'}>
            <Form
                onSubmit={handleSubmit}
                validate={values => {
                    let errors = {}
                    if (!values.login) {
                        errors.login = 'Логин не должен быть пустым'
                    }
                    if (!values.password) {
                        errors.password = 'Пароль не должен быть пустым'
                    }
                    return errors
                }}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
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

                            <Field
                                component={TextField}
                                label={'Имя пользователя'}
                                placeholder={'Имя пользователя'}
                                margin={'normal'}
                                name={'login'}
                                required
                            />

                            <Field
                                component={TextField}
                                label={'Пароль'}
                                placeholder={'Пароль'}
                                margin={'normal'}
                                name={'password'}
                                type={'password'}
                                required
                            />

                            {state.isErrorVisible ? showError() : null}

                            <Button type={'submit'}
                                    data-testid={'LoginButton'}
                                    variant={'contained'}
                                    color={'primary'}
                                    disabled={authIsLoading === true}
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
