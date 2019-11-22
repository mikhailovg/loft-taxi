import { takeEvery, call, put, all } from 'redux-saga/effects'
import {
    fetchAddressListRequest,
    fetchAddressListSuccess,
    fetchAddressListFailure,

    fetchGetCardSuccess,
    fetchGetCardFailure,
    fetchGetCardRequest,

    fetchAuthRequest,
    fetchAuthSuccess,
    fetchAuthFailure,

    fetchRegisterRequest,
    fetchRegisterSuccess,
    fetchRegisterFailure,

    fetchPostCardRequest,
    fetchPostCardSuccess,
    fetchPostCardFailure,

    fetchGetRouteListSuccess,
    fetchGetRouteListFailure,
    fetchGetRouteListRequest,

} from './actions'

const host = 'https://loft-taxi.glitch.me'

export const callPostAuth = (action) =>
    fetch(host + '/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
    })
        .then(response => response.json())

export const callPostRegister = (action) =>
    fetch(host + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
    })
        .then(response => response.json())

export const callPostCard = (action) =>
    fetch(host + '/card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
    })
        .then(response => response.json())

export const callGetAddressList = () =>
    fetch(host + '/addressList')
        .then(response => response.json())

export const callGetCard = () =>
    fetch(host + '/card?token=' + localStorage.getItem('authToken'))
        .then(response => response.json())

export const callGetRoute = (action) =>
    fetch(host + '/route?address1=' + action.payload.address1 + '&address2=' + action.payload.address2)
        .then(response => response.json())

export function* sagaLogger() {
    yield takeEvery('*', function*(action) {
        console.log('ACTION', action)
    })
}

export function* sagaGetAddressList() {
    try {
        const result = yield call(callGetAddressList)
        yield put(fetchAddressListSuccess(result))
    } catch (error) {
        yield put(fetchAddressListFailure(error))
    }
}

export function* sagaGetCard() {
    try {
        const result = yield call(callGetCard)
        yield put(fetchGetCardSuccess(result))
    } catch (error) {
        yield put(fetchGetCardFailure(error))
    }
}

export function* sagaPostAuth(action) {
    try {
        if (action && action.payload && action.payload.email && action.payload.password) {
            const result = yield call(callPostAuth, action)
            yield put(fetchAuthSuccess(result))
        } else {
            yield put(fetchAuthSuccess({success: false}))
        }
    } catch (error) {
        yield put(fetchAuthFailure(error))
    }
}

export function* sagaPostRegister(action) {
    try {
        if (action && action.payload && action.payload.email && action.payload.password) {
            const result = yield call(callPostRegister, action)
            yield put(fetchRegisterSuccess(result))
        } else {
            yield put(fetchRegisterSuccess({success: false}))
        }
    } catch (error) {
        yield put(fetchRegisterFailure(error))
    }
}

export function* sagaPostCard(action) {
    try {
        const result = yield call(callPostCard, action)
        yield put(fetchPostCardSuccess(result))
    } catch (error) {
        yield put(fetchPostCardFailure(error))
    }
}

export function* sagaGetRoute(action) {
    try {
        const result = yield call(callGetRoute, action)
        yield put(fetchGetRouteListSuccess(result))
    } catch (error) {
        yield put(fetchGetRouteListFailure(error))
    }
}

export function* rootSaga() {
    yield all([
        sagaLogger(),
        yield takeEvery(fetchAddressListRequest, sagaGetAddressList),
        yield takeEvery(fetchGetCardRequest, sagaGetCard),
        yield takeEvery(fetchGetRouteListRequest, sagaGetRoute),
        yield takeEvery(fetchAuthRequest, sagaPostAuth),
        yield takeEvery(fetchRegisterRequest, sagaPostRegister),
        yield takeEvery(fetchPostCardRequest, sagaPostCard),
    ])
}
