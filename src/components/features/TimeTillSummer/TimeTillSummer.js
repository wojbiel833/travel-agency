import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeTillSummer.scss';

class TimeTillSummer extends React.Component {
  constructor() {
    super();

    setInterval(() => this.forceUpdate(), 1000);
  }

  getTimeTillSummer() {
    const currentTime = new Date();

    const yearDaysCount = 31449600000 / 1000 / 60 / 60 / 24;

    const summerStart = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23));

    const summerDaysCount = 8121600000 / 1000 / 60 / 60 / 24;

    const nowTillSummer = Math.round(
      (summerStart.getTime() - currentTime.getTime()) / 24 / 60 / 60 / 1000
    );
    const nowFromSummer = Math.round(
      (currentTime.getTime() - summerEnd.getTime()) / 24 / 60 / 60 / 1000
    );

    if (currentTime.getTime() < summerStart.getTime()) {
      return nowTillSummer;
    } else if (currentTime.getTime() > summerEnd.getTime()) {
      return yearDaysCount - summerDaysCount - nowFromSummer;
    } else return null;
  }

  render() {
    return (
      <div className={styles.component}>
        <span className={styles.fatLetters}>{this.getTimeTillSummer()}</span>
        {/* {this.getTimeTillSummer() == 1
        ? `${this.getTimeTillSummer()} DAY `
        : `${this.getTimeTillSummer()} DAYS `} */}
        <h3 className={styles.summerTime}>{this.props.description}</h3>
      </div>
    );
  }
}

TimeTillSummer.propTypes = {
  description: PropTypes.string,
};

export default TimeTillSummer;
