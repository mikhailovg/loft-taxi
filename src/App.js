import React from 'react';
import './App.css';

import {Profile} from './profile';
import {Map} from './map';
import {Login} from './login';
import {Registration} from './registration';
import {Header} from './shared/Header';

import {
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'

import {

    getAuth,
    getRegister,

} from './modules/main'
import {Router} from 'react-router'
import history from './history'

function App() {

    const auth = useSelector(getAuth, shallowEqual)
    const register = useSelector(getRegister, shallowEqual)

    return (
        <Router history={history}>
            {(auth && auth.success && JSON.parse(auth.success) === true) || (register && register.success && JSON.parse(register.success) === true) ?
                <Header id={'header'}/> : null
            }
            <Switch>
                <Route path={'/login'} render={() => <Login/>}/>
                <Route path={'/map'} render={() => <Map/>}/>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/registration'} render={() => <Registration/>}/>
                <Redirect from={'/'} to={'login'}/>
            </Switch>

        </Router>
    )
}

export default App
