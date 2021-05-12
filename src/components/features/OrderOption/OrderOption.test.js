import React from 'react';
import { shallow } from 'enzyme';

import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <OrderOption type="type" name="name" id="id" setOrderOption={() => {}} />
    );
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should render correct name', () => {
    const expectedName = 'Lorem ipsum';
    const component = shallow(<OrderOption type="text" name={expectedName} />);

    expect(component.find('.title').text()).toEqual(expectedName);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
// const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );

      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });
    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
      // console.log(component.debug());
      console.log(subcomponent.debug());
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('select')
            .simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
      case 'icons': {
        it('contains div and Icon', () => {
          const div = renderedSubcomponent.find('div');
          expect(div.length).toBe(4); //4 divy

          const noOption = div.find('Icon[name="times-circle"]').length;
          expect(noOption).toBe(1);

          const optionIcons = div.find('div Icon').not('[name="times-circle"]');
          expect(optionIcons.length).toBe(mockProps.values.length);
          expect(optionIcons.at(0).prop('name')).toBe(mockProps.values[0].icon);
          expect(optionIcons.at(1).prop('name')).toBe(mockProps.values[1].icon);
        });
        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('div div:last-child').simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
      case 'checkboxes': {
        it('contains label and input', () => {
          const label = renderedSubcomponent.find('div label');
          expect(label.length).toBe(2); //jak to 2 a nie 4?

          const emptyInput = label.find('input[value=""]').length;
          expect(emptyInput).toBe(0);

          const input = label.find('input').not('input[value=""]');
          expect(input.length).toBe(mockProps.values.length);
          expect(input.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(input.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        // it('should run setOrderOption function on change', () => {
        //   renderedSubcomponent
        //     .find(`input[value="${testValue}"]`)
        //     .simulate('change', { currentTarget: { checked: true } });
        //   expect(mockSetOrderOption).toBeCalledTimes(1);
        //   expect(mockSetOrderOption).toBeCalledWith([
        //     { [mockProps.id]: mockPropsForType.checkboxes.currentValue },
        //   ]);
        // });
        break;
      }
      case 'text': {
        /* tests for dropdown */
        it('contains input', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);

          const emptyOption = input.find('[name=""]').length;
          expect(emptyOption).toBe(0);

          const options = input.find('option').not('[name=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent
            .find('input')
            .simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]: testValue,
          });
        });
        break;
      }
    }
  });
}
