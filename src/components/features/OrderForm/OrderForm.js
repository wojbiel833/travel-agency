import React from 'react';
// import { Grid, Row, Col } from 'react-grid-system';
// Czy to duża róznica/błąd?
import { Grid, Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types';

// import styles from './OrderForm.scss';
import PageTitle from './../../common/PageTitle/PageTitle';
import OrderSummary from './../OrderSummary/OrderSummary';
import pricing from './../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ cost, options, setOrderOption }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text="Trip options" />
          <Row>
            {pricing.map(option => (
              <Col sm={6} md={4} lg={3} key={option.id}>
                <OrderOption
                  name={option.name || ''}
                  type={option.type}
                  {...option}
                  setOrderOption={setOrderOption}
                  currentValue={options[option.id]}
                ></OrderOption>
              </Col>
            ))}
          </Row>
          <OrderSummary options={options} tripCost={cost}></OrderSummary>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object || PropTypes.array,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
