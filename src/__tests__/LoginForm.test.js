import React from 'react';
import {mount, shallow} from 'enzyme';
import '../setupTests';
import renderer from 'react-test-renderer';

import {LoginForm} from '../login/LoginForm';
import {Login} from "../login";

describe('Login', () => {
    const outer = shallow(<LoginForm/>);
    const wrapper = shallow(outer.props().children({ /* context */}));

    it('renders LoginForm', () => {
        expect(wrapper.find('.LoginForm').exists()).toEqual(true);

        // const outerWrapper = mount(<LoginForm />);
        // outerWrapper.find('button').simulate('click')
    });

    it('renders correctly', () => {
        const tree = renderer.create(<LoginForm/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
    Map: () => ({})
}))