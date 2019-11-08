import { handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import {
    fetchAuthRequest,
    fetchAuthSuccess,
    fetchAuthFailure,

    fetchRegisterRequest,
    fetchRegisterSuccess,
    fetchRegisterFailure,

    fetchAddressListRequest,
    fetchAddressListSuccess,
    fetchAddressListFailure,

} from './actions'

const authResult = handleActions(
    {
        [fetchAuthRequest]: () => null,
        [fetchAuthSuccess]: (_state, action) => action.payload,
    },
    [],
)

const authIsLoading = handleActions(
    {
        [fetchAuthRequest]: () => true,
        [fetchAuthSuccess]: () => false,
        [fetchAuthFailure]: () => false,
    },
    false,
)

const authError = handleActions(
    {
        [fetchAuthRequest]: () => null,
        [fetchAuthFailure]: (_state, action) => action.payload,
    },
    null,
)

const registerResult = handleActions(
    {
        [fetchRegisterRequest]: () => null,
        [fetchRegisterSuccess]: (_state, action) => action.payload,
    },
    [],
)

const registerIsLoading = handleActions(
    {
        [fetchRegisterRequest]: () => true,
        [fetchRegisterSuccess]: () => false,
        [fetchRegisterFailure]: () => false,
    },
    false,
)

const registerError = handleActions(
    {
        [fetchRegisterRequest]: () => null,
        [fetchRegisterFailure]: (_state, action) => action.payload,
    },
    null,
)

const addressListElements = handleActions(
    {
        [fetchAddressListRequest]: () => [],
        [fetchAddressListSuccess]: (_state, action) => action.payload,
    },
    [],
)

const addressListIsLoading = handleActions(
    {
        [fetchAddressListRequest]: () => true,
        [fetchAddressListSuccess]: () => false,
        [fetchAddressListFailure]: () => false,
    },
    false,
)

const addressListError = handleActions(
    {
        [fetchAddressListRequest]: () => null,
        [fetchAddressListFailure]: (_state, action) => action.payload,
    },
    null,
)

export default combineReducers({
    authResult,
    authIsLoading,
    authError,

    registerResult,
    registerIsLoading,
    registerError,

    addressListElements,
    addressListIsLoading,
    addressListError,

})
