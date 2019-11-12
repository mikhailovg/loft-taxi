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

const callPostAuth = (action) =>
    fetch(host + '/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
    })
        .then(response => response.json())

const callPostRegister = (action) =>
    fetch(host + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
    })
        .then(response => response.json())

const callPostCard = (action) =>
    fetch(host + '/card', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
    })
        .then(response => response.json())

const callGetAddressList = () =>
    fetch(host + '/addressList')
        .then(response => response.json())

const callGetCard = () =>
    fetch(host + '/card?token=' + localStorage.getItem('authToken'))
        .then(response => response.json())

const callGetRoute = (action) =>
    fetch(host + '/route?address1=' + action.payload.address1 + '&address2=' + action.payload.address2)
        .then(response => response.json())

export function* sagaLogger() {
    yield takeEvery('*', function* logger(action) {
        console.log('ACTION', action)
    })
}

export function* sagaGetAddressList() {

    yield takeEvery(fetchAddressListRequest, function*() {
        try {
            const result = yield call(callGetAddressList)
            yield put(fetchAddressListSuccess(result))
        } catch (error) {
            yield put(fetchAddressListFailure(error))
        }
    })
}

export function* sagaGetCard() {

    yield takeEvery(fetchGetCardRequest, function*() {
        try {
            const result = yield call(callGetCard)
            yield put(fetchGetCardSuccess(result))
        } catch (error) {
            yield put(fetchGetCardFailure(error))
        }
    })
}

export function* sagaPostAuth() {

    yield takeEvery(fetchAuthRequest, function*(action) {
        try {
            const result = yield call(callPostAuth, action)
            yield put(fetchAuthSuccess(result))
        } catch (error) {
            yield put(fetchAuthFailure(error))
        }
    })
}

export function* sagaPostRegister() {

    yield takeEvery(fetchRegisterRequest, function*(action) {
        try {
            const result = yield call(callPostRegister, action)
            yield put(fetchRegisterSuccess(result))
        } catch (error) {
            yield put(fetchRegisterFailure(error))
        }
    })
}

export function* sagaPostCard() {

    yield takeEvery(fetchPostCardRequest, function*(action) {
        try {
            const result = yield call(callPostCard, action)
            yield put(fetchPostCardSuccess(result))
        } catch (error) {
            yield put(fetchPostCardFailure(error))
        }
    })
}

function* sagaGetRoute() {

    yield takeEvery(fetchGetRouteListRequest, function*(action) {
        try {
            const result = yield call(callGetRoute, action)
            yield put(fetchGetRouteListSuccess(result))
        } catch (error) {
            yield put(fetchGetRouteListFailure(error))
        }
    })
}

export function* rootSaga() {
    yield all([
        sagaLogger(),
        sagaGetAddressList(),
        sagaGetCard(),
        sagaGetRoute(),
        sagaPostAuth(),
        sagaPostRegister(),
        sagaPostCard(),
    ])
}
