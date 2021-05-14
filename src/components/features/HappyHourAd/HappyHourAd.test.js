import React from 'react';
import { shallow } from 'enzyme';

import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Lorem ipsum',
  promoDescription: 'Lorem ipsum dolor',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });
  it('should render correct description', () => {
    const component = shallow(
      <HappyHourAd description={mockProps.promoDescription} {...mockProps} />
    );

    expect(component.find(select.title).prop('description')).toEqual(
      mockProps.promoDescription
    );
    // expect(input.at(0).prop('value')).toBe(mockProps.values[0].id);
  });
});
