import reducer from '../modules'
import * as actions from '../modules/main/actions'

describe('Reducer', () => {

    it('AUTH_REQUEST', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: null,
            authIsLoading: false,
            authResult: null,
            cardError: null,
            cardIsLoading: false,
            cardResult: null,
            postCardError: null,
            postCardIsLoading: false,
            postCardResult: null,
            registerError: null,
            registerIsLoading: false,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchAuthRequest,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                authIsLoading: true,
            },
        })
    })

    it('AUTH_REQUEST_AFTER_ERROR', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: 'Error',
            authIsLoading: false,
            authResult: null,
            cardError: null,
            cardIsLoading: false,
            cardResult: null,
            postCardError: null,
            postCardIsLoading: false,
            postCardResult: null,
            registerError: null,
            registerIsLoading: false,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchAuthRequest,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                authIsLoading: true,
                authError: null,
            },
        })
    })

    it('AUTH_SUCCESS', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: null,
            authIsLoading: true,
            authResult: null,
            cardError: null,
            cardIsLoading: false,
            cardResult: null,
            postCardError: null,
            postCardIsLoading: false,
            postCardResult: null,
            registerError: null,
            registerIsLoading: false,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchAuthSuccess,
            payload: {result: true, token: 'AUTH_TOKEN'},
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                authIsLoading: false,
                authResult: action.payload,
            }
        })
    })

    it('REGISTER_REQUEST_AFTER_ERROR', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: null,
            authIsLoading: false,
            authResult: null,
            cardError: null,
            cardIsLoading: false,
            cardResult: null,
            postCardError: null,
            postCardIsLoading: false,
            postCardResult: null,
            registerError: 'Error',
            registerIsLoading: false,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchRegisterRequest,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                registerIsLoading: true,
                registerError: null,
            },
        })
    })

    it('REGISTER_SUCCESS', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: null,
            authIsLoading: false,
            authResult: null,
            cardError: null,
            cardIsLoading: false,
            cardResult: null,
            postCardError: null,
            postCardIsLoading: false,
            postCardResult: null,
            registerError: null,
            registerIsLoading: true,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchRegisterSuccess,
            payload: {result: true, token: 'AUTH_TOKEN'},
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                registerIsLoading: false,
                registerResult: action.payload,
            }
        })
    })


    it('CARD_REQUEST_AFTER_ERROR', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: null,
            authIsLoading: false,
            authResult: null,
            cardError: 'Error',
            cardIsLoading: false,
            cardResult: null,
            postCardError: null,
            postCardIsLoading: false,
            postCardResult: null,
            registerError: null,
            registerIsLoading: false,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchGetCardRequest,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                cardIsLoading: true,
                cardError: null,
            },
        })
    })

    it('CARD_SUCCESS', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: null,
            authIsLoading: false,
            authResult: null,
            cardError: null,
            cardIsLoading: true,
            cardResult: null,
            postCardError: null,
            postCardIsLoading: false,
            postCardResult: null,
            registerError: null,
            registerIsLoading: false,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchGetCardSuccess,
            payload: {cardNumber: '1234'},
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                cardIsLoading: false,
                cardResult: action.payload,
            }
        })
    })

    it('POST_CARD_REQUEST_AFTER_ERROR', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: null,
            authIsLoading: false,
            authResult: null,
            cardError: null,
            cardIsLoading: false,
            cardResult: null,
            postCardError: 'Error',
            postCardIsLoading: false,
            postCardResult: null,
            registerError: null,
            registerIsLoading: false,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchPostCardRequest,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                postCardIsLoading: true,
                postCardError: null,
            },
        })
    })

    it('POST_CARD_SUCCESS', () => {

        const mainReducerInitialState = {
            addressListElements: [],
            addressListError: null,
            addressListIsLoading: false,
            authError: null,
            authIsLoading: false,
            authResult: null,
            cardError: null,
            cardIsLoading: false,
            cardResult: null,
            postCardError: null,
            postCardIsLoading: true,
            postCardResult: null,
            registerError: null,
            registerIsLoading: false,
            registerResult: null,
            routeList: [],
            routeListError: null,
            routeListIsLoading: false,
        }

        const initialState = {
            mainReducer: mainReducerInitialState
        }

        const action = {
            type: actions.fetchPostCardSuccess,
            payload: {cardNumber: '1234'},
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            mainReducer: {
                ...mainReducerInitialState,
                postCardIsLoading: false,
                postCardResult: action.payload,
            }
        })
    })

})