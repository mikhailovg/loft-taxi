import React from 'react'
import {mount, shallow} from 'enzyme'
import '../setupTests'
import renderer from 'react-test-renderer'

import {ProfileForm} from '../profile/ProfileForm'
import {Router} from 'react-router'
import history from '../history'

describe('ProfileForm', () => {
    const wrapper = shallow(<ProfileForm/>);
    const routerWrapper = shallow(
        <Router history={history}>
            <ProfileForm/>
        </Router>
    )

    it('renders ProfileForm Container', () => {
        expect(wrapper.find('.ProfileFormContainer').length === 1).toEqual(true);
    });

    it('renders ProfileForm', () => {
        expect(wrapper.find('.ProfileForm').length === 1).toEqual(true);
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