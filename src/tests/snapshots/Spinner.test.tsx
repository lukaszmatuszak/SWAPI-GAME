import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Spinner from '../../components/Spinner/Spinner';
import '../../core/i18n/i18n';

describe('Spinner Snapshot - ', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Spinner />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
