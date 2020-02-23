import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResourceTile from '../../components/ResourceTile/ResourceTile';
import '../../core/i18n/i18n';

describe('Spinner Snapshot - ', () => {
    it('renders correctly', () => {
        const wrapper = shallow(
            <ResourceTile
                resource={{
                    iconSrc: '/vader.svg',
                    title: 'test',
                    iconAlt: 'testAlt',
                    redirect: 'test',
                }}
            />,
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
