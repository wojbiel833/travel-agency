import React from 'react';
import { shallow } from 'enzyme';

import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct id', () => {
    const id = 'abc';
    const expectedId = `/trip/${id}`;
    const component = shallow(<TripSummary to={expectedId} />);

    // const renderedId = component.find('.link').text();
    // expect(renderedId).toEqual(expectedId);
    expect(component.find('.link').prop('to')).toEqual(expectedId);
  });
  it('should render correct src and alt in <img>', () => {
    const expectedAlt = 'Lorem ipsum';
    const expectedSrc = 'image.jpg';
    const component = shallow(
      <TripSummary src={expectedSrc} alt={expectedAlt} />
    );

    const renderedImg = component.find('img').text();
    expect(renderedImg).toEqual(expectedAlt);
    expect(component.find('.image').prop('src')).toEqual(expectedSrc);
  });
  it('should throw error without required props', () => {
    expect(() =>
      shallow(
        <TripSummary
        // id="Lorem ipsum"
        // image="Lorem ipsum"
        // name="Lorem ipsum"
        // cost="Lorem ipsum"
        // days={1}
        />
      )
    ).toThrow();
  });
  it('should render without crashing', () => {
    const component = shallow(
      <TripSummary
        id="Lorem ipsum"
        image="Lorem ipsum"
        name="Lorem ipsum"
        cost="Lorem ipsum"
        days={1}
      />
    );
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should render correct tags array', () => {
    const expectedArray = ['test1', 'test2', 'test3'];
    const component = shallow(<TripSummary tags={expectedArray} />);

    const renderedArray = component.find('.tags').text();
    expect(renderedArray).toEqual(expectedArray);
    // expect(component.find('.tags').prop('tags')).toEqual(expectedArray);
  });
});
