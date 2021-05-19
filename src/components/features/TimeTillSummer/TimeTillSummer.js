import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeTillSummer.scss';

class TimeTillSummer extends React.Component {
  constructor() {
    super();

    setInterval(() => this.forceUpdate(), 1000);
  }

  getTimeTillSummer() {
    const currentTimePlain = new Date();
    const currentTime = new Date(
      Date.UTC(
        currentTimePlain.getUTCFullYear(),
        currentTimePlain.getUTCMonth(),
        currentTimePlain.getUTCDate(),
        0,
        0,
        0,
        0
      )
    );

    const summerStart = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23));

    console.log('CurrentTime:', currentTime, currentTime.getTime());
    console.log('Summerstart:', summerStart, summerStart.getTime());
    console.log('Summer end:', summerEnd, summerEnd.getTime());

    // if(currentTime.getUTCMonth() >= summerStart.getUTCMonth() && currentTime.getUTCMonth() >= summerEnd.getUTCMonth() && currentTime.getUTCDate() >= summerStart.getUTCDate() && currentTime.getUTCDate() >= summerEnd.getUTCDate())

    if (
      currentTime.getTime() >= summerStart.getTime() &&
      currentTime.getTime() <= summerEnd.getTime()
    )
      return null;
    else {
      if (
        currentTime.getMonth() > summerEnd.getMonth() ||
        (currentTime.getMonth() === summerEnd.getMonth() &&
          currentTime.getDate() >= summerEnd.getDate())
      )
        summerStart.setFullUTCYear(currentTime.getFullUTCYear() + 1);

      const days =
        (summerStart.getTime() - currentTime.getTime()) / 1000 / 3600 / 24;
      return days;
    }
  }

  render() {
    if (!this.getTimeTillSummer()) return null;
    else {
      return (
        <div className={styles.component}>
          <span className={styles.fatLetters}>
            {this.getTimeTillSummer() == 1
              ? `${this.getTimeTillSummer()} DAY `
              : `${this.getTimeTillSummer()} DAYS `}
          </span>
          <h3 className={styles.summerTime}>{this.props.description}</h3>
        </div>
      );
    }
  }
}

TimeTillSummer.propTypes = {
  description: PropTypes.string,
};

export default TimeTillSummer;
