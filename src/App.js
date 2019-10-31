import React from 'react';
import './App.css';

import {Profile} from './profile';
import {Map} from './map';
import {Login} from './login';
import {Registration} from './registration';
import {Header} from './shared/Header';

const PAGES = {
    profile: () => <Profile/>,
    map: () => <Map/>,
    login: setPage => <Login setPage={setPage}/>,
    registration: setPage => <Registration setPage={setPage}/>
}

const AppContext = React.createContext({})
export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer

function App() {

    const [page, setPage] = React.useState('login')

    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const login = (email, password) => {
        if (email === 'test' && password === '123') {
            setIsLoggedIn(true)
            setPage('profile')
        }
    }

    const logout = () => {
        setIsLoggedIn(false)
        setPage('login')
    }

    return (
        <AppProvider value={{login, logout, isLoggedIn}}>
            <Header id={'header'} setPage={setPage}/>
            {PAGES[page](setPage)}
        </AppProvider>
    )
}

export default App
