import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TopBar from '../../components/TopBar/TopBar';
import '../../core/i18n/i18n';

describe('TopBar Snapshot - ', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<TopBar />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
