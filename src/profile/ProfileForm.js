import React, {useState} from 'react'
import '../App.css'

import {
    Button,
    TextField,
    Keyboard
} from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import {Link} from 'react-router-dom'

import {
    getAuth,
    fetchAuthRequest,
} from '../modules/main'

import {shallowEqual, useSelector, useDispatch} from 'react-redux'
import history from '../history'

export const ProfileForm = () => {

    /*const auth = useSelector(getAuth, shallowEqual)
    const authRequest = useSelector(fetchAuthRequest, shallowEqual)

    const dispatch = useDispatch()

    if (auth && auth.success && JSON.parse(auth.success) === true) {
        localStorage.setItem('authSuccess', auth.success)
        history.push('/map')
    }*/

    const onSubmit = (event) => {
        event.preventDefault()

        // dispatch({
        //     ...authRequest,
        //     payload: {
        //         email: event.target.login.value,
        //         password: event.target.password.value
        //     }
        // })
    }

    const [selectedDate, handleDateChange] = useState(new Date())

    return (

        <div className={'ProfileFormContainer'}>
            <form onSubmit={onSubmit} className={'ProfileForm'}>

                <div className={'ProfileFormCards'}>

                    <div className={'ProfileFormCardContainer'}>
                        <div className={'ProfileFormCard'}>
                            <div className={'ProfileFormCardFields'}>

                                <span className={'IconMasterCard'} width={'32px'}>
                                    <img width={'32px'} src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 131.39 86.9'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bopacity:0;%7D.b%7Bfill:%23fff;%7D.c%7Bfill:%23ff5f00;%7D.d%7Bfill:%23eb001b;%7D.e%7Bfill:%23f79e1b;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 1%3C/title%3E%3Cg class='a'%3E%3Crect class='b' width='131.39' height='86.9'/%3E%3C/g%3E%3Crect class='c' x='48.37' y='15.14' width='34.66' height='56.61'/%3E%3Cpath class='d' d='M51.94,43.45a35.94,35.94,0,0,1,13.75-28.3,36,36,0,1,0,0,56.61A35.94,35.94,0,0,1,51.94,43.45Z'/%3E%3Cpath class='e' d='M120.5,65.76V64.6H121v-.24h-1.19v.24h.47v1.16Zm2.31,0v-1.4h-.36l-.42,1-.42-1h-.36v1.4h.26V64.7l.39.91h.27l.39-.91v1.06Z'/%3E%3Cpath class='e' d='M123.94,43.45a36,36,0,0,1-58.25,28.3,36,36,0,0,0,0-56.61,36,36,0,0,1,58.25,28.3Z'/%3E%3C/svg%3E"/>
                                </span>

                                <TextField
                                    required
                                    label={'Номер карты'}
                                    placeholder={'0000 0000 0000 0000'}
                                    margin={'normal'}
                                    name={'cardNumber'}
                                />

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        openTo={'year'}
                                        format={'MM/yy'}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        animateYearScrolling
                                    />
                                </MuiPickersUtilsProvider>
                            </div>
                        </div>
                    </div>

                    <div className={'ProfileFormCardContainer'}>
                        <div className={'ProfileFormCard'}>
                            <div className={'ProfileFormCardFields'}>

                                <TextField
                                    required
                                    label={'Имя владельца'}
                                    margin={'normal'}
                                    name={'userName'}
                                />

                                <TextField
                                    required
                                    label={'CVC'}
                                    margin={'normal'}
                                    name={'cvc'}
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>

        /*<div className={'LoginForm'}>

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
                            className={'LoginButton'}>
                        Войти
                    </Button>

                </div>
            </form>

        </div>*/
    )
}
