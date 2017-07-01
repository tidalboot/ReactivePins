import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Listing from '../Listing/Listing';

describe('Listing tests', () => {
  const traderName = 'JeffKaplan';
  const mockFunction = jest.fn();
  const componentToTest = shallow(
    <Listing name={traderName} removeListing={mockFunction} />
  );

  it('shows JeffKaplan as the trader', () => {
    expect(componentToTest.text()).toContain(traderName);
  });

  it('shows that Tracer is the pin on offer', () => {
    expect(componentToTest.text()).toContain("Tracer");
  });

  it('renders and matches our existing snapshot', () => {
    const componentToTest = renderer.create(
      <Listing name={traderName} />
    );

    const componentAsJsonTree = componentToTest.toJSON();
    expect(componentAsJsonTree).toMatchSnapshot();
  });
});