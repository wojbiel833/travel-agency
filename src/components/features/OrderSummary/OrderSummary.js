import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';
import { formatPrice } from './../../../utils/formatPrice';
import { calculateTotal } from './../../../utils/calculateTotal';

const OrderSummary = ({ tripCost, options }) => {
  return (
    <h2 className={styles.component}>
      <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.array,
};

export default OrderSummary;
