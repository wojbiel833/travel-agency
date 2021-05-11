import React from 'react';
import { shallow } from 'enzyme';

import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct id', () => {
    const id = 'abc';
    const expectedId = `/trip/${id}`;
    const component = shallow(
      <TripSummary
        id={id}
        tags={[]}
        image="Lorem ipsum"
        name="Lorem ipsum"
        cost="Lorem ipsum"
        days={1}
      />
    );

    expect(component.find('.link').prop('to')).toEqual(expectedId);
  });
  it('should render correct src and alt in <img>', () => {
    const expectedAlt = 'Lorem ipsum';
    const expectedSrc = 'image.jpg';
    const component = shallow(
      <TripSummary
        image={expectedSrc}
        name={expectedAlt}
        id="12"
        cost="Lorem ipsum"
        days={1}
        tags={[]}
      />
    );

    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
  });

  it('should render without crashing', () => {
    const component = shallow(
      <TripSummary
        id="Lorem ipsum"
        image="Lorem ipsum"
        name="Lorem ipsum"
        cost="Lorem ipsum"
        days={1}
        tags={[]}
      />
    );
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should render correct tags array', () => {
    const expectedArray = ['test1', 'test2', 'test3'];
    const component = shallow(
      <TripSummary
        tags={expectedArray}
        id="12"
        image="Lorem ipsum"
        name="Lorem ipsum"
        cost="Lorem ipsum"
        days={1}
      />
    );

    expect(component.find('.tags span').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedArray[2]);
  });
});
