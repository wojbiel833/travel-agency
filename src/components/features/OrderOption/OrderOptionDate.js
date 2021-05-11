import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import pl from 'date-fns/locale/pl';
registerLocale('pl', pl);

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

const OrderOptionDate = ({ id, name, type, currentValue, setOptionValue }) => {
  return (
    <section className={styles.text}>
      <label type={type} id={id}>
        <DatePicker
          locale="pl"
          selected={currentValue}
          onChange={date => setOptionValue(date)}
        />
        {name}
      </label>
    </section>
  );
};

OrderOptionDate.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
