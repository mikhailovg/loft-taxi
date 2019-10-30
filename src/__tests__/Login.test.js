import React from 'react';
import {mount, shallow} from 'enzyme';
import '../setupTests';
import renderer from 'react-test-renderer';

import {LoginForm} from '../login/LoginForm';
import {Login} from "../login";

describe('Login', () => {

    const parentWrapper = shallow(<Login/>);

    const outer = shallow(<LoginForm/>);
    const wrapper = shallow(outer.props().children({ /* context */}));

    it('renders root div', () => {
        expect(parentWrapper.find('.Login').length === 1).toEqual(true);
    });

    it('renders LoginForm', () => {
        expect(wrapper.find('.LoginForm').length === 1).toEqual(true);

        // const outerWrapper = mount(<LoginForm />);
        // outerWrapper.find('button').simulate('click')
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Login/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
    Map: () => ({})
}))