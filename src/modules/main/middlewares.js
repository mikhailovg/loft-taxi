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

    fetchGetCardFailure,
    fetchGetCardSuccess,
    fetchGetCardRequest,

    fetchPostCardFailure,
    fetchPostCardSuccess,
    fetchPostCardRequest,

} from './actions'

const host = 'https://loft-taxi.glitch.me'

/**
 * @deprecated
 */
export const fetchUserMiddleware = store => next => action => {
    switch (action.type) {

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

        case fetchPostCardRequest.toString():
            fetch(host + '/card', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(action.payload),
            })
                .then(response => response.json())
                .then(result => {
                    store.dispatch(fetchPostCardSuccess(result))
                })
                .catch(error => {
                    store.dispatch(fetchPostCardFailure(error))
                })
            break

        case fetchGetCardRequest.toString():
            fetch(host + '/card?token=' + localStorage.getItem('authToken'))
                .then(response => response.json())
                .then(result => {
                    store.dispatch(fetchGetCardSuccess(result))
                })
                .catch(error => {
                    store.dispatch(fetchGetCardFailure(error))
                })
            break

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

    }
    return next(action)
}