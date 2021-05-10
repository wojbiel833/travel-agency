import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
// , setDefaultLocale
import pl from 'date-fns/locale/pl';
registerLocale('pl', pl);

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

const OrderOptionDate = ({ id, name, type, currentValue }) => {
  const [startDate, setStartDate] = useState(currentValue);
  return (
    <section className={styles.text}>
      <label type={type} id={id}>
        <DatePicker
          locale="pl"
          selected={startDate}
          onChange={date => setStartDate(date)}
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
};

export default OrderOptionDate;
