import React from 'react'
import {mount, shallow} from 'enzyme'
import '../setupTests'
import renderer from 'react-test-renderer'

import {Map} from '../map'

describe('Map', () => {
    const wrapper = shallow(<Map/>);

    it('renders root div', () => {
        expect(wrapper.find('.PageTitle').length === 1).toEqual(true);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Map/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
    Map: () => ({})
}))

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ({
        auth: {
            success: true,
            token: 'TOKEN1'
        },
        register: {
            success: true,
            token: 'TOKEN1'
        },
    })
}))