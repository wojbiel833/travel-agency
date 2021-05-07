import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionText = ({ id, name, type }) => (
  <section className={styles.text}>
    <label type={type} id={id}>
      <input />
      {name}
    </label>
  </section>
);

OrderOptionText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default OrderOptionText;
