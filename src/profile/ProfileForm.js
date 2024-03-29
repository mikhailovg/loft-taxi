import React, {useEffect, useState} from 'react'
import '../App.css'

import {
    Button,
} from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

import {
    getCard,
    getPostCard,
    getPostCardError,
    fetchGetCardRequest,
    fetchPostCardRequest,
} from '../modules/main'

import {shallowEqual, useSelector, useDispatch} from 'react-redux'
import history from '../history'
import {Form, Field} from 'react-final-form'
import { TextField } from 'mui-rff'

export const ProfileForm = () => {

    const card = useSelector(getCard, shallowEqual)
    const callGetCardRequest = useSelector(fetchGetCardRequest, shallowEqual)

    const postCard = useSelector(getPostCard, shallowEqual)
    const postCardError = useSelector(getPostCardError, shallowEqual)
    const callPostCardRequest = useSelector(fetchPostCardRequest, shallowEqual)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(callGetCardRequest)
    }, [])

    const [state, setState] = useState({
        cardNumber: '',
        expiryDate: new Date(),
        cardName: '',
        cvc: '',
        isSaveSuccess: false,
    })

    useEffect(() => {
        if (card && card.cardNumber) {
            setState(
                {
                    cardNumber: card && card.cardNumber ? card.cardNumber : '',
                    expiryDate: card && card.expiryDate ? card.expiryDate : new Date(),
                    cardName: card && card.cardName ? card.cardName : '',
                    cvc: card && card.cvc ? card.cvc : '',
                }
            )
        }
    }, [card])

    const handleSubmit = (values) => {
        dispatch({
            ...callPostCardRequest,
            payload: {
                cardNumber: values.cardNumber,
                expiryDate: state.expiryDate,
                cardName: values.cardName,
                cvc: values.cvc,
                token: localStorage.getItem('authToken'),
            }
        })
    }

    useEffect(() => {
        if (postCard && postCard.success) {
            setState({...state, isSaveSuccess: true})
        }
    }, [postCard])

    const showError = () => {
        setTimeout(() => {
            setState({...state, isErrorVisible: false})
        }, 5000)
        return (
            <div className={'Error'}>{postCardError ? postCardError : 'Ошибка сохранения данных карты'}</div>
        )
    }

    return (

        state.isSaveSuccess ?

            <div className={''}>
                <div className={'ProfileSaveSuccess'}>Платёжные данные обновлены. Теперь вы можете заказывать такси.
                </div>
                <div className={'ProfileFormButton'}>
                    <Button type={'submit'}
                            variant={'contained'}
                            color={'primary'}
                            onClick={() => history.push('/map')}
                            className={'ButtonLowerCase'}>
                        Перейти на карту
                    </Button>
                </div>
            </div>

            :

            <div className={'ProfileFormContainer'}>
                <Form
                    className={'ProfileForm'}
                    initialValues={{
                        cardNumber: card && card.cardNumber ? card.cardNumber : '',
                        expiryDate: card && card.expiryDate ? card.expiryDate : new Date(),
                        cardName: card && card.cardName ? card.cardName : '',
                        cvc: card && card.cvc ? card.cvc : '',
                    }}
                    onSubmit={handleSubmit}
                    validate={values => {
                        let errors = {}
                        if (!/^\d+$/.test(values.cardNumber)) {
                            errors.cardNumber = 'Поле может содержать только цифры'
                        }
                        if (!values.cardNumber) {
                            errors.cardNumber = 'Номер карты не должен быть пустым'
                        }
                        if (!/^\d+$/.test(values.cvc)) {
                            errors.cvc = 'Поле может содержать только цифры'
                        }
                        if (!values.cardName) {
                            errors.cardName = 'Имя не должно быть пустым'
                        }
                        if (!values.cvc) {
                            errors.cvc = 'CVC код не должен быть пустым'
                        }
                        return errors
                    }}
                    render={({handleSubmit}) => (

                        <form onSubmit={handleSubmit} >

                            <div className={'ProfileFormCards'}>

                                <div className={'ProfileFormCardContainer'}>
                                    <div className={'ProfileFormCard'}>
                                        <div className={'ProfileFormCardFields'}>

                                            <span className={'IconMasterCard'} width={'32px'}>
                                                <img width={'32px'} src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 131.39 86.9'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bopacity:0;%7D.b%7Bfill:%23fff;%7D.c%7Bfill:%23ff5f00;%7D.d%7Bfill:%23eb001b;%7D.e%7Bfill:%23f79e1b;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 1%3C/title%3E%3Cg class='a'%3E%3Crect class='b' width='131.39' height='86.9'/%3E%3C/g%3E%3Crect class='c' x='48.37' y='15.14' width='34.66' height='56.61'/%3E%3Cpath class='d' d='M51.94,43.45a35.94,35.94,0,0,1,13.75-28.3,36,36,0,1,0,0,56.61A35.94,35.94,0,0,1,51.94,43.45Z'/%3E%3Cpath class='e' d='M120.5,65.76V64.6H121v-.24h-1.19v.24h.47v1.16Zm2.31,0v-1.4h-.36l-.42,1-.42-1h-.36v1.4h.26V64.7l.39.91h.27l.39-.91v1.06Z'/%3E%3Cpath class='e' d='M123.94,43.45a36,36,0,0,1-58.25,28.3,36,36,0,0,0,0-56.61,36,36,0,0,1,58.25,28.3Z'/%3E%3C/svg%3E"/>
                                            </span>

                                            <div>

                                                <div className={'TextFieldLabelBlock'}>
                                                    <label htmlFor={'cardNumber'} className={'TextFieldLabel'}>Номер карты *</label>
                                                </div>
                                                <Field
                                                    component={TextField}
                                                    required
                                                    placeholder={'0000 0000 0000 0000'}
                                                    margin={'normal'}
                                                    name={'cardNumber'}
                                                />
                                            </div>

                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <DatePicker
                                                    openTo={'year'}
                                                    format={'MM/yy'}
                                                    minDate={new Date()}
                                                    maxDate={new Date('2099-12-01')}
                                                    defaultValue={new Date(2000, 11, 1)}
                                                    value={state.expiryDate}
                                                    onChange={(value) => {
                                                        setState({expiryDate: new Date(value)})
                                                    }}
                                                    animateYearScrolling
                                                    name={'expiryDate'}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </div>
                                    </div>
                                </div>

                                <div className={'ProfileFormCardContainer'}>
                                    <div className={'ProfileFormCard'}>
                                        <div className={'ProfileFormCardFields'}>

                                            <div className={'TextFieldLabelBlock'}>
                                                <label htmlFor={'cardNumber'} className={'TextFieldLabel'}>Имя владельца *</label>
                                            </div>
                                            <Field
                                                component={TextField}
                                                required
                                                margin={'normal'}
                                                name={'cardName'}
                                            />

                                            <div className={'TextFieldLabelBlock'}>
                                                <label htmlFor={'cardNumber'} className={'TextFieldLabel'}>CVC *</label>
                                            </div>
                                            <Field
                                                component={TextField}
                                                required
                                                margin={'normal'}
                                                name={'cvc'}
                                            />

                                        </div>
                                    </div>
                                </div>

                            </div>

                            {state.isErrorVisible ? showError() : null}

                            <div className={'ProfileFormButton'}>
                                <Button type={'submit'} variant={'contained'} color={'primary'}
                                        className={'LoginButton'}>
                                    Сохранить
                                </Button>
                            </div>

                        </form>
                    )}
                />
            </div>
    )

}