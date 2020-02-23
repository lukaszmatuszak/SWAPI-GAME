import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomeView from '../../views/HomeView/HomeView';
import '../../core/i18n/i18n';

describe('HomeView Snapshot - ', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<HomeView />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
