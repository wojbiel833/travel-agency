import React from 'react';
import { shallow } from 'enzyme';

import TimeTillSummer from './TimeTillSummer';

describe('Component TimeTillSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<TimeTillSummer />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
});
