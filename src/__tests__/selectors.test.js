import * as selectors from '../modules/main/selectors'

describe('Selectors', () => {

    it('getAuth', () => {
        const mockState = {
            authResult: {
                success: true,
                token: 'TOKEN',
            }
        }
        const selected = selectors.getAuth.resultFunc(mockState)
        expect(selected).toEqual(mockState)
    })

    it('getRegister', () => {
        const mockState = {
            registerResult: {
                success: true,
                token: 'TOKEN',
            }
        }
        const selected = selectors.getRegister.resultFunc(mockState)
        expect(selected).toEqual(mockState)
    })

    it('getCard', () => {
        const mockState = {
            cardResult: {
                cardName: '1',
                cardNumber: '1',
                cvc: '1',
                expiryDate: '1',
                id: '1',
            }
        }
        const selected = selectors.getCard.resultFunc(mockState)
        expect(selected).toEqual(mockState)
    })

    it('getPostCard', () => {
        const mockState = {
            postCardResult: {
                success: true,
            }
        }
        const selected = selectors.getPostCard.resultFunc(mockState)
        expect(selected).toEqual(mockState)
    })

    it('getAddressList', () => {
        const mockState = {
            addressListElements: {addresses: ['1', '2']}
        }
        const selected = selectors.getAddressList.resultFunc(mockState)
        expect(selected).toEqual(mockState)
    })

    it('getRouteList', () => {
        const mockState = {
            routeList: {addresses: [[1, 0], [0, 0]]}
        }
        const selected = selectors.getRouteList.resultFunc(mockState)
        expect(selected).toEqual(mockState)
    })

})