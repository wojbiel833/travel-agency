import React from 'react';

import styles from './HappyHourAd.scss';

const HappyHourAd = description => {
  return (
    <section>
      <h3 className={styles.title} title={description} />
      <div className={styles.promoDescription}></div>
    </section>
  );
};

export default HappyHourAd;
