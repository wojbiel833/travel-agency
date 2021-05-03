import React from 'react';
// import { Grid, Row, Col } from 'react-grid-system';
// Czy to duża róznica/błąd?
import { Grid, Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types';

// import styles from './OrderForm.scss';
import PageTitle from './../../common/PageTitle/PageTitle';
import OrderSummary from './../OrderSummary/OrderSummary';
// import { pricing } from './../../../data/pricing.json';
import OrederOption from '../OrderOption/OrderOption';

const OrderForm = ({ cost, options }) => {
  return (
    <Grid>
      <Row>
        <OrederOption />
        <Col xs={12}>
          <PageTitle text="Trip options" />
          <OrderSummary options={options} tripCost={cost} />
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
