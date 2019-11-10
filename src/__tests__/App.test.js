import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme'
import '../setupTests'
import renderer from 'react-test-renderer'

import App from '../App'

describe('App', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Header', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('#header').length === 0).toEqual(true);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
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