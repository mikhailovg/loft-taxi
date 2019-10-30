import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import '../setupTests';
import renderer from 'react-test-renderer';

import {Header} from "../shared/Header";

describe('Header', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    const outer = shallow(<Header/>);
    const wrapper = shallow(outer.props().children({ /* context */}));

    it('renders Header', () => {
        expect(wrapper.find('.Header').length === 1).toEqual(true);
    });

    it('renders LoginButton', () => {
        expect(wrapper.find('#LoginButton').exists()).toEqual(true);
    });

    it('don`t renders LogoutButton', () => {
        expect(wrapper.find('#LogoutButton').exists()).toEqual(false);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Header/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
    Map: () => ({})
}))
