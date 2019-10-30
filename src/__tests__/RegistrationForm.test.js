import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import '../setupTests';
import renderer from 'react-test-renderer';

import App, {AppConsumer} from '../App';
import {LoginForm} from '../login/LoginForm';
import {Login} from "../login";
import {Registration} from '../registration';
import {RegistrationForm} from '../registration/RegistrationForm';
import {Profile} from '../profile';

describe('Registration', () => {
    const outer = shallow(<RegistrationForm/>);
    const wrapper = shallow(outer.props().children({ /* context */}));

    it('renders RegistrationForm', () => {
        expect(wrapper.find('.LoginForm').length === 1).toEqual(true);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<RegistrationForm/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
    Map: () => ({})
}))