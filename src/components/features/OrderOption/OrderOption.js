import React from 'react';
import { Col } from 'react-flexbox-grid';

import styles from './OrderOption.scss';
import pricing from './../../../data/pricing.json';

const OrederOption = () => {
  return (
    <div className={styles.component}>
      {pricing.map(price => (
        <Col md={4} key={price.id}>
          <h3 className={styles.title}>{price.name}</h3>
        </Col>
      ))}
    </div>
  );
};

export default OrederOption;
