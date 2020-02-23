import React from 'react';
import { shallow } from 'enzyme';

import { Status } from '../interfaces/Status';
import DetailsTile from '../components/DetailsTile/DetailsTile';

describe('DetailsTile Component', () => {
    it('Have correct information - Character', () => {
        const wrapper = shallow(
            <DetailsTile
                playerStatus={{
                    name: 'test',
                    status: Status.WINNER,
                    mass: 20,
                    crew: null,
                    score: 1,
                }}
            />,
        );

        expect(wrapper.find('[data-test="details-name"]').text()).toBe('test');
        expect(wrapper.find('[data-test="details-mass"]').text()).toBe(
            'Mass: 20',
        );
        expect(wrapper.find('[data-test="details-crew"]').length).toBe(0);
        expect(wrapper.find('[data-test="status"]').text()).toBe(Status.WINNER);
        expect(wrapper.find('[alt="vader"]').length).toBe(1);
        expect(wrapper.find('[alt="falcon"]').length).toBe(0);
    });

    it('Have correct information - Starship', () => {
        const wrapper = shallow(
            <DetailsTile
                playerStatus={{
                    name: 'test',
                    status: Status.WINNER,
                    mass: null,
                    crew: 20,
                    score: 1,
                }}
            />,
        );

        expect(wrapper.find('[data-test="details-name"]').text()).toBe('test');
        expect(wrapper.find('[data-test="details-crew"]').text()).toBe(
            'Crew: 20',
        );
        expect(wrapper.find('[data-test="details-mass"]').length).toBe(0);
        expect(wrapper.find('[data-test="status"]').text()).toBe(Status.WINNER);
        expect(wrapper.find('[alt="falcon"]').length).toBe(1);
        expect(wrapper.find('[alt="vader"]').length).toBe(0);
    });
});
