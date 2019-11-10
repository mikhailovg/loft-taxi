import { createSelector } from 'reselect'

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

export const cardIsLoading = state => state.mainReducer.cardIsLoading
export const cardError = state => state.mainReducer.cardError
export const getCard = createSelector(
    state => state.mainReducer.cardResult,
    cardResult => cardResult,
)

export const getPostCardIsLoading = state => state.mainReducer.postCardIsLoading
export const getPostCardError = state => state.mainReducer.postCardError
export const getPostCard = createSelector(
    state => state.mainReducer.postCardResult,
    postCardResult => postCardResult,
)

export const getAddressListIsLoading = state => state.mainReducer.addressListIsLoading
export const getAddressListError = state => state.mainReducer.addressListError
export const getAddressList = createSelector(
    state => state.mainReducer.addressListElements,
    addressListElements => addressListElements,
)