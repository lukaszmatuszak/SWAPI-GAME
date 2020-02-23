import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ChangeLanguageMenu from '../../components/ChangeLanguageMenu/ChangeLanguageMenu';
import '../../core/i18n/i18n';

describe('ChangeLanguageMenu Snapshot - ', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<ChangeLanguageMenu />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
