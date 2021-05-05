import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import styles from './OrderOption.scss';
import Icon from './../../common/Icon/Icon';
import { formatPrice } from './../../../utils/formatPrice';

const OrderOptionIcons = ({ values, setOptionValue }) => (
  <div className={styles.icons}>
    {values.map(value => (
      <div
        key={value.id}
        onClick={event => setOptionValue(event.currentTarget.id)}
        className={styles.iconActive}
      >
        <Icon name={value.icon} />
        {ReactHtmlParser(value.name)}
        {ReactHtmlParser(formatPrice(value.price))}
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  id: PropTypes.string,
  options: PropTypes.array || PropTypes.object,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
