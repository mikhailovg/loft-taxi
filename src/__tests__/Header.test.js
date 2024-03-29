import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme'
import '../setupTests'
import renderer from 'react-test-renderer'

import {Header} from '../shared/Header'
import {Router} from 'react-router'
import history from '../history'

describe('Header', () => {

    const wrapper = shallow(<Header/>)

    const routerWrapper = shallow(
        <Router history={history}>
            <Header/>
        </Router>
    )

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(routerWrapper, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Header', () => {
        expect(wrapper.find('.Header').length === 1).toEqual(true);
    });

    it('don`t renders LoginButton', () => {
        expect(wrapper.find('#LoginButton').exists()).toEqual(false);
    });

    it('renders LogoutButton', () => {
        expect(wrapper.find('#LogoutButton').exists()).toEqual(true);
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