import { createStore, compose, applyMiddleware } from 'redux'
import { fetchUserMiddleware } from './modules/addressList'
import rootReducer from './modules'

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(fetchUserMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    )

    return store
}

export default createAppStore
