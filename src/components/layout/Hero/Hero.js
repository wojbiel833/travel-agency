import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import TimeTillSummer from '../../features/TimeTillSummer/TimeTillSummer';

const Hero = ({ variant = '', titleText, imageSrc, ...otherProps }) => (
  <div
    {...otherProps}
    className={
      styles.component +
      variant
        .split(' ')
        .map(name => ' ' + (styles[name] || name))
        .join('')
    }
  >
    <div className={styles.summerTime}>
      <TimeTillSummer description="TILL SUMMER!" />
    </div>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image} src={imageSrc} />
    <div className={styles.happyHour}>
      <HappyHourAd description="Happy Hour" />
    </div>
  </div>
);

Hero.propTypes = {
  variant: PropTypes.string,
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Hero;
