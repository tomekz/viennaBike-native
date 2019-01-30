import React from 'react';
import renderer from 'react-test-renderer';
import { StationCard } from '../../src/components';

const station = {
    empty_slots: 10,
    extra: {
        description: null,
        internal_id: '1144',
        slots: '26',
    },
    free_bikes: 16,
    id: '1d136fa0c5957b1969db40e3c2a0df1d',
    latitude: 48.210666083418,
    longitude: 16.37298586854365,
    name: 'Hoher Markt',
    timestamp: '2017-05-30T13:37:46.649000Z',
};

it('renders correctly', () => {
    const tree = renderer.create(<StationCard station={station} />).toJSON();
    expect(tree).toMatchSnapshot();
});
