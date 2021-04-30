import React from 'react';
// import { Grid, Row, Col } from 'react-grid-system';
// Czy to duża róznica/błąd?
import { Grid, Row, Col } from 'react-flexbox-grid';

// import PropTypes from 'prop-types';

// import styles from './OrderForm.scss';
import PageTitle from './../../common/PageTitle/PageTitle';
import OrderSummary from './../OrderSummary/OrderSummary';

const OrderForm = cost => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text="Trip options" />
          <OrderSummary tripCost={cost} />
        </Col>
      </Row>
    </Grid>
  );
};

export default OrderForm;
