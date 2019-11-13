import {put, call} from 'redux-saga/effects'
import * as sagas from '../modules/main/sagas'
import {
    fetchAddressListSuccess,
    fetchAuthSuccess,
    fetchGetCardSuccess,
    fetchGetRouteListSuccess,
    fetchPostCardSuccess,
    fetchRegisterSuccess
} from '../modules/main/actions'


describe('test sagaGetAddressList', () => {

    const gen = sagas.sagaGetAddressList()

    it('calls action', () => {
        expect(gen.next().value).toEqual(call(sagas.callGetAddressList))
    })

    it('dispatches success action', () => {
        expect(gen.next({addresses: ['Pulkovo']}).value).toEqual(put(fetchAddressListSuccess({addresses: ['Pulkovo']})))
    })

})

describe('test sagaGetCard', () => {

    const gen = sagas.sagaGetCard()

    it('calls action', () => {
        expect(gen.next().value).toEqual(call(sagas.callGetCard))
    })

    it('dispatches success action', () => {
        expect(gen.next({success: true}).value).toEqual(put(fetchGetCardSuccess({success: true})))
    })

})

describe('test sagaGetRoute', () => {

    const gen = sagas.sagaGetRoute()

    it('calls action', () => {
        expect(gen.next().value).toEqual(call(sagas.callGetRoute, undefined))
    })

    it('dispatches success action', () => {
        expect(gen.next({success: true}).value).toEqual(put(fetchGetRouteListSuccess({success: true})))
    })

})

describe('test sagaPostAuth', () => {

    const gen = sagas.sagaPostAuth()

    it('calls action', () => {
        expect(gen.next().value).toEqual(call(sagas.callPostAuth, undefined))
    })

    it('dispatches success action', () => {
        expect(gen.next({success: true, token: 'lalala'}).value).toEqual(put(fetchAuthSuccess({success: true, token: 'lalala'})))
    })

})

describe('test sagaPostRegister', () => {

    const gen = sagas.sagaPostRegister()

    it('calls action', () => {
        expect(gen.next().value).toEqual(call(sagas.callPostRegister, undefined))
    })

    it('dispatches success action', () => {
        expect(gen.next({success: true, token: 'lalala'}).value).toEqual(put(fetchRegisterSuccess({success: true, token: 'lalala'})))
    })

})


describe('test sagaPostCard', () => {

    const gen = sagas.sagaPostCard()

    it('calls action', () => {
        expect(gen.next().value).toEqual(call(sagas.callPostCard, undefined))
    })

    it('dispatches success action', () => {
        expect(gen.next({success: true}).value).toEqual(put(fetchPostCardSuccess({success: true})))
    })

})