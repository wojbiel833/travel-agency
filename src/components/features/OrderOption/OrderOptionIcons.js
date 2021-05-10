import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

import styles from './OrderOption.scss';
import Icon from './../../common/Icon/Icon';
import { formatPrice } from './../../../utils/formatPrice';

const OrderOptionIcons = ({
  values,
  setOptionValue,
  currentValue,
  required,
}) => (
  <div className={styles.icons}>
    {required ? (
      ''
    ) : (
      <div onClick={() => setOptionValue('')} className={styles.icon}>
        <Icon name="times-circle" />
        none
      </div>
    )}
    {values.map(value => (
      <div
        key={value.id}
        onClick={() => setOptionValue(value.id)}
        className={
          styles.icon +
          (value.id === currentValue ? ' ' + styles.iconActive : '')
        }
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
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  required: PropTypes.bool,
};

// const OrderOptionIcons = ({ values, setOptionValue, required }) => {
//   if (!required) {
//     return (
//       <div className={styles.icon}>
//         {values.map(() => (
//           <div
//             key={Math.trunc(Math.random() * 1000)}
//             onClick={() => setOptionValue('')}
//             className={styles.icon}
//           >
//             <Icon name={'times-circle'} />
//             NONE
//           </div>
//         ))}
//       </div>
//     );
//   } else {
//     return (
//       <div className={styles.icons}>
//         {values.map(value => (
//           <div
//             key={value.id}
//             onClick={event => setOptionValue(event.currentTarget.id)}
//             className={
//               styles.icon +
//               (value.id === value.currentValue ? ' ' + styles.iconActive : '')
//             }
//           >
//             <Icon name={value.icon} />
//             <span>{ReactHtmlParser(value.name)}</span>
//             <span>{ReactHtmlParser(formatPrice(value.price))}</span>
//           </div>
//         ))}
//       </div>
//     );
//   }
// };

// OrderOptionIcons.propTypes = {
//   values: PropTypes.array,
//   id: PropTypes.string,
//   options: PropTypes.array || PropTypes.object,
//   setOptionValue: PropTypes.func,
//   required: PropTypes.bool,
// };

export default OrderOptionIcons;
