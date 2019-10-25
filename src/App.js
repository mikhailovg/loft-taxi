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

function App() {

    const [page, setPage] = React.useState("login");

    return (
        <React.Fragment>
            <Header setPage={setPage}/>
            {PAGES[page](setPage)}
        </React.Fragment>
    );
}

export default App;
