import {
    fetchAuthFailure,
    fetchAuthRequest,
    fetchAuthSuccess,

    fetchRegisterFailure,
    fetchRegisterRequest,
    fetchRegisterSuccess,

    fetchAddressListFailure,
    fetchAddressListSuccess,
    fetchAddressListRequest,
} from './actions'

const host = 'https://loft-taxi.glitch.me'

export const fetchUserMiddleware = store => next => action => {
    switch (action.type) {

        case fetchAddressListRequest.toString():
            fetch(host + '/addressList')
                .then(response => response.json())
                .then(result => {
                    store.dispatch(fetchAddressListSuccess(result))
                })
                .catch(error => {
                    store.dispatch(fetchAddressListFailure(error))
                })
            break

        case fetchAuthRequest.toString():
            fetch(host + '/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(action.payload),
            })
                .then(response => response.json())
                .then(result => {
                    store.dispatch(fetchAuthSuccess(result))
                })
                .catch(error => {
                    store.dispatch(fetchAuthFailure(error))
                })
            break

        case fetchRegisterRequest.toString():
            fetch(host + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(action.payload),
            })
                .then(response => response.json())
                .then(result => {
                    store.dispatch(fetchRegisterSuccess(result))
                })
                .catch(error => {
                    store.dispatch(fetchRegisterFailure(error))
                })
            break

    }
    return next(action)
}