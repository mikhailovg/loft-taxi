import { createSelector } from 'reselect'

export const getAddressListIsLoading = state => state.mainReducer.addressListIsLoading
export const getAddressListError = state => state.mainReducer.addressListError
export const getAddressList = createSelector(
    state => state.mainReducer.addressListElements,
    addressListElements => addressListElements,
)

export const getAuthIsLoading = state => state.mainReducer.authIsLoading
export const getAuthError = state => state.mainReducer.authError
export const getAuth = createSelector(
    state => state.mainReducer.authResult,
    authResult => authResult,
)

export const getRegisterIsLoading = state => state.mainReducer.registerIsLoading
export const getRegisterError = state => state.mainReducer.registerError
export const getRegister = createSelector(
    state => state.mainReducer.registerResult,
    registerResult => registerResult,
)
