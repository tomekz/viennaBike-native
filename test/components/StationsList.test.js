import React from 'react';
import { StationsList } from '../../src/components'
import testData from '../fake-stations';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const stations = testData.network.stations
  const tree = renderer.create(<StationsList stations = {[stations[0], stations[1]]}/>).toJSON();
  expect(tree).toMatchSnapshot()
})

