import React from 'react';
import { shallow } from 'enzyme';

import TimeTillSummer from './TimeTillSummer';

const select = {
  summerTime: '.summerTime',
  fatLetters: '.fatLetters',
};

const mockProps = {
  summerTimeDescr: 'Lorem ipsum',
  daysNumber: '100',
};

describe('Component TimeTillSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<TimeTillSummer />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should render heading', () => {
    const component = shallow(<TimeTillSummer />);
    expect(component.exists('.summerTime')).toEqual(true);
  });
  it('should render correct description', () => {
    const component = shallow(
      <TimeTillSummer description={mockProps.summerTimeDescr} />
    );

    expect(component.find(select.summerTime).text()).toEqual(
      mockProps.summerTimeDescr
    );
  });
  it('should render days count', () => {
    const component = shallow(
      <TimeTillSummer description={mockProps.summerTimeDescr} />
    );

    expect(component.exists('.fatLetters')).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = customDate =>
  class extends Date {
    constructor(...args) {
      if (args.length) {
        super(...args);
      } else {
        super(customDate);
      }
      return this;
    }
    static now() {
      return new Date(customDate).getTime();
    }
  };

const checkDescriptionAtDay = (date, expectedDescription) => {
  it(`should show correct days count in ${date}`, () => {
    global.Date = mockDate(`${date}`);

    const component = shallow(<TimeTillSummer {...mockProps} />);
    const renderedTime = component.find(select.fatLetters).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component TimeTillSummer with mocked Date', () => {
  checkDescriptionAtDay('17-05-2021', '34');
  // checkDescriptionAtDay('01-02-2021', '140');
  // checkDescriptionAtDay('20-06-2021', '1');
  // checkDescriptionAtDay('20-07-2021', '');
  // checkDescriptionAtDay('22-09-2021', '');
  // checkDescriptionAtDay('24-09-2021', '218');
});
