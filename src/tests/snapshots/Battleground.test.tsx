import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Battleground from '../../components/Battleground/Battleground';
import { contestantsStarshipMock } from '../fixtures/contestants';
import '../../core/i18n/i18n';

describe('Battleground Snapshot - ', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <Battleground contestants={contestantsStarshipMock} />,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
