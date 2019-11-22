import React from 'react'

import {
    Button,
} from '@material-ui/core'

import logo from '../header-logo.svg'
import {Link, NavLink} from 'react-router-dom'

import {
    fetchAuthRequest,
    fetchRegisterRequest,
} from '../modules/main'

import {shallowEqual, useDispatch, useSelector} from 'react-redux'

export const Header = () => {

    const dispatch = useDispatch()

    const authRequest = useSelector(fetchAuthRequest, shallowEqual)
    const registerRequest = useSelector(fetchRegisterRequest, shallowEqual)

    const performLogout = () => {

        localStorage.setItem('authSuccess', 'false')
        localStorage.setItem('registerSuccess', 'false')

        dispatch({
            ...authRequest, payload: {
                email: null,
                password: null
            }
        })

        dispatch({
            ...registerRequest, payload: {
                email: null,
                password: null,
                name: null,
                surname: null,
            }
        })
    }

    return (

        <div className={'Header'}>

            <p className={'HeaderLogo'}>
                <img src={logo} width={'156'} alt={'Logo'}/>
            </p>

            <Button color={'primary'}>
                <Link to={'/map'} className={'HeaderLink'}>
                    Карта
                </Link>
            </Button>
            <Button color={'primary'}>
                <NavLink to={'/profile'} className={'HeaderLink'} activeClassName={'HeaderLink'}>
                    Профиль
                </NavLink>
            </Button>

           <Button id={'LogoutButton'} color={'primary'} onClick={performLogout}>
               <Link to={'/'} className={'HeaderLink'}>
                   Выход
               </Link>
           </Button>

        </div>
    )
}