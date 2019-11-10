import React from 'react'
import {mount, shallow} from 'enzyme'
import '../setupTests'
import renderer from 'react-test-renderer'

import {LoginForm} from '../login/LoginForm'
import {RegistrationForm} from '../registration/RegistrationForm'
import {Router} from 'react-router'
import history from '../history'

describe('Registration', () => {
    const wrapper = shallow(<RegistrationForm/>);
    const routerWrapper = shallow(
        <Router history={history}>
            <RegistrationForm/>
        </Router>
    )

    it('renders RegistrationForm', () => {
        expect(wrapper.find('.LoginForm').length === 1).toEqual(true);
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