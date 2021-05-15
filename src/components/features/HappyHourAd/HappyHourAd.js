import React from 'react';
import PropTypes from 'prop-types';

// import styles from './HappyHourAd.scss';

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
    const description = this.props;
    const displayPromoDescr = this.getCountdownTime();
    return (
      <section>
        <h3 className="title" title={description}>
          {description}
        </h3>
        <div className="promoDescription"></div>
        <div className="promoTime">
          {displayPromoDescr > 23 ? description : this.getCountdownTime()}
        </div>
      </section>
    );
  }
}

HappyHourAd.propTypes = {
  description: PropTypes.string,
};

export default HappyHourAd;
