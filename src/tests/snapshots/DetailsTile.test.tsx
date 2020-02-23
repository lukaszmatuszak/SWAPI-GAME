import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DetailsTile from '../../components/DetailsTile/DetailsTile';
import { Status } from '../../interfaces/Status';

describe('DetailsTile Snapshot - Character ', () => {
    it('with winner status', () => {
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

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Character with looser status', () => {
        const wrapper = shallow(
            <DetailsTile
                playerStatus={{
                    name: 'test',
                    status: Status.LOOSER,
                    mass: 20,
                    crew: null,
                    score: 1,
                }}
            />,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('Character with draw status', () => {
        const wrapper = shallow(
            <DetailsTile
                playerStatus={{
                    name: 'test',
                    status: Status.DRAW,
                    mass: 20,
                    crew: null,
                    score: 1,
                }}
            />,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

describe('DetailsTile Snapshot - Starship', () => {
    it('with winner status', () => {
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

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with looser status', () => {
        const wrapper = shallow(
            <DetailsTile
                playerStatus={{
                    name: 'test',
                    status: Status.LOOSER,
                    mass: null,
                    crew: 20,
                    score: 1,
                }}
            />,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with draw status', () => {
        const wrapper = shallow(
            <DetailsTile
                playerStatus={{
                    name: 'test',
                    status: Status.DRAW,
                    mass: null,
                    crew: 20,
                    score: 1,
                }}
            />,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
