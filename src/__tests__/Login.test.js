import React from 'react'
import {mount, shallow} from 'enzyme'
import '../setupTests'
import renderer from 'react-test-renderer'

import {Login} from '../login'
import {Router} from 'react-router'
import history from '../history'

describe('Login', () => {

    const wrapper = shallow(<Login/>)

    const routerWrapper = shallow(
        <Router history={history}>
            <Login/>
        </Router>
    )

    it('renders root div', () => {
        expect(wrapper.find('.Login').length === 1).toEqual(true);
    });

    it('renders LoginForm', () => {
        expect(wrapper.find('.LoginColumn').length > 0).toEqual(true);
    });

    it('renders correctly', () => {
        const tree = renderer.create(routerWrapper).toJSON();
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