import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';

import Button from './../../common/Button/Button';
import settings from './../../../data/settings';

import { formatPrice } from './../../../utils/formatPrice';
import { calculateTotal } from './../../../utils/calculateTotal';

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderSummary = ({ tripCost, options }) => {
  return (
    <h2 className={styles.component}>
      <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
      <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default OrderSummary;
