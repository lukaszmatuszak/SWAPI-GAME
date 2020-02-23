import React from 'react';
import { shallow } from 'enzyme';

import Battleground from '../components/Battleground/Battleground';
import { contestantsStarshipMock } from './fixtures/contestants';
import '../core/i18n/i18n';

describe('Battleground Component', () => {
    it('Have correct information - Character', () => {
        const wrapper = shallow(
            <Battleground contestants={contestantsStarshipMock} />,
        );

        expect(wrapper.find('[data-test="score"]').text()).toBe('0 : 0');
        wrapper.find('[data-test="play-again"]').simulate('click');

        expect(
            wrapper.find('[data-test="score"]').text() === '0 : 1' ||
                wrapper.find('[data-test="score"]').text() === '1 : 0' ||
                wrapper.find('[data-test="score"]').text() === '1 : 1',
        ).toBeTruthy();
    });
});
