import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CharactersArenaView from '../../views/CharactersArenaView/CharactersArenaView';
import '../../core/i18n/i18n';

describe('Characters Snapshot - ', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<CharactersArenaView />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
