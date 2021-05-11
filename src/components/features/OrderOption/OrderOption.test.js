import React from 'react';
import { shallow } from 'enzyme';

import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <OrderOption
        type="type"
        name="name"
        id="id"
        setOrderOption="setOrderOption"
      />
    );
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should render correct title', () => {
    const expectedName = 'Lorem ipsum';
    const component = shallow(<OrderOption name={expectedName} />);

    const renderedName = component.find('.title').render();
    expect(component.find('.title').render().prop('name')).toEqual(
      renderedName
    );
  });
});
