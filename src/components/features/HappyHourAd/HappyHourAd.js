import React from 'react';
import PropTypes from 'prop-types';

import styles from './HappyHourAd.scss';
import { formatTime } from './../../../utils/FormatTime';

class HappyHourAd extends React.Component {
  constructor() {
    super();

    setInterval(() => this.forceUpdate(), 1000);
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(),
        12,
        0,
        0,
        0
      )
    );

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  render() {
    const validateTime = this.getCountdownTime();
    const promotionText = '20% discount!';
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{this.props.description}</h3>
        <div className={styles.promoDescription}>
          <div className="promoTime">
            {validateTime <= 82800 && validateTime >= 1
              ? formatTime(this.getCountdownTime())
              : promotionText}
          </div>
        </div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  description: PropTypes.string,
};

export default HappyHourAd;
