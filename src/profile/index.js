import React from 'react'
import '../App.css'
import {shallowEqual, useSelector} from 'react-redux'
import {getAuth, getRegister} from '../modules/main'
import {ProfileForm} from './ProfileForm'

export const Profile = () => {

    const auth = useSelector(getAuth, shallowEqual)
    const register = useSelector(getRegister, shallowEqual)

    return (auth && auth.success && JSON.parse(auth.success) === true) || (register && register.success && JSON.parse(register.success) === true) ?
        <div className={'Profile'}>
            <div className={'LoginForm FlexCenter'}>
                <p className={'ProfileTitle'}>Профиль</p>
                <p className={'ProfileSubTitle'}>Способ оплаты</p>

                <ProfileForm/>
            </div>
        </div> :
        <div>
            <h1 className={'PageTitle'}>Сначала залогиньтесь</h1>
        </div>
}