import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import '../setupTests';
import renderer from 'react-test-renderer';

import {Profile} from '../profile';

describe('Profile', () => {
    const outer = shallow(<Profile/>);
    const wrapper = shallow(outer.props().children({ /* context */}));

    it('renders root div', () => {
        console.log(wrapper.debug())
        expect(wrapper.find('.PageTitle').length === 1).toEqual(true);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Profile/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
    Map: () => ({})
}))
