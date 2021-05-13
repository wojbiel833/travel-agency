import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionText = ({ id, name, type, setOptionValue }) => (
  <section className={styles.text}>
    <label type={type} id={id}>
      <input
        onChange={e => setOptionValue(e.currentTarget.value)}
        type="text"
      />
      {name}
    </label>
  </section>
);

OrderOptionText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
