import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import { formatPrice } from './../../../utils/formatPrice';

const newValueSet = (currentValue = [], id, checked) => {
  if (checked) {
    return [...currentValue, id];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({ values, setOptionValue, currentValue }) => {
  console.log(values);
  return (
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label key={value.id}>
          <input
            type="checkbox"
            value={value.id}
            name={value.name}
            price={formatPrice(value.price)}
            onChange={event =>
              setOptionValue(
                newValueSet(currentValue, value.id, event.currentTarget.checked)
              )
            }
          />
          <span>{value.name}</span>
          <span>{formatPrice(value.price)}</span>
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;
