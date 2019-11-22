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

describe('Sagas', () => {

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

    describe('test sagaPostAuth success call', () => {

        const action = {payload: {password: 'password', email: 'email'}}
        const gen = sagas.sagaPostAuth(action)

        it('calls action', () => {
            expect(gen.next().value).toEqual(call(sagas.callPostAuth, action))
        })

    })

    describe('test sagaPostAuth failure', () => {

        const gen = sagas.sagaPostAuth()

        it('dispatches success action', () => {
            expect(gen.next({success: false}).value).toEqual(put(fetchAuthSuccess({success: false})))
        })

    })

    describe('test sagaPostRegister success call', () => {

        const action = {payload: {password: 'password', email: 'email'}}
        const gen = sagas.sagaPostRegister(action)

        it('calls action', () => {
            expect(gen.next().value).toEqual(call(sagas.callPostRegister, action))
        })

    })

    describe('test sagaPostRegister failure', () => {

        const gen = sagas.sagaPostRegister()

        it('dispatches success action', () => {
            expect(gen.next({success: false}).value).toEqual(put(fetchRegisterSuccess({success: false})))
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

})