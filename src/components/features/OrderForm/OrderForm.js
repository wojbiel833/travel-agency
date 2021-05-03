import React from 'react';
// import { Grid, Row, Col } from 'react-grid-system';
// Czy to duża róznica/błąd?
import { Grid, Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types';

import styles from './OrderForm.scss';
import PageTitle from './../../common/PageTitle/PageTitle';
import OrderSummary from './../OrderSummary/OrderSummary';
import pricing from './../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ cost, options }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text="Trip options" />
          <OrderOption>
            {pricing.map(price => (
              <Col md={4} key={price.id}>
                <h3 className={styles.title}>{price.name}</h3>
              </Col>
            ))}
          </OrderOption>
          <OrderSummary options={options} tripCost={cost}></OrderSummary>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object || PropTypes.array,
};

export default OrderForm;