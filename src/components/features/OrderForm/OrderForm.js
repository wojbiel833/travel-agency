import React from 'react';
// import { Grid, Row, Col } from 'react-grid-system';
// Czy to duża róznica/błąd?
import { Grid, Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types';

// import styles from './OrderForm.scss';
import PageTitle from './../../common/PageTitle/PageTitle';
import OrderSummary from './../OrderSummary/OrderSummary';

const OrderForm = (cost, options) => {
  console.log(cost.tCost);
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text="Trip options" />
          <OrderSummary options={options} tripCost={cost.tCost} />
        </Col>
      </Row>
    </Grid>
  );
};

OrderSummary.propTypes = {
  tCost: PropTypes.string,
};

export default OrderForm;
