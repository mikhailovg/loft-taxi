import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
// import createAppStore from './store'
import {applyMiddleware, compose, createStore} from 'redux'

import { fetchUserMiddleware } from './modules/main'

import rootReducer from './modules'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const store = createStore(
    rootReducer,
    {
        mainReducer: {
            authResult: {
                success: localStorage.getItem('authSuccess')
            },
            registerResult: {
                success: localStorage.getItem('registerSuccess')
            },
        }
    },
    compose(
        applyMiddleware(fetchUserMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop,
    ),
)

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)