import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

// import styles from './OrderForm.scss';
// import formatPrice from './../../../utils/formatPrice';
// import calculateTotal from './../../../utils/calculateTotal';
import PageTitle from './../../common/PageTitle/PageTitle';
import OrderSummary from './../OrderSummary/OrderSummary';
import pricing from './../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
// import Button from './../../common/Button/Button';
// import { settings } from './../../../data/settings';

// const sendOrder = (options, tripCost) => {
//   const totalCost = formatPrice(calculateTotal(tripCost, options));

//   const payload = {
//     ...options,
//     totalCost,
//   };

//   const url = settings.db.url + '/' + settings.db.endpoint.orders;

//   const fetchOptions = {
//     cache: 'no-cache',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   };

//   fetch(url, fetchOptions)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (parsedResponse) {
//       console.log('parsedResponse', parsedResponse);
//     });
// };

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
          {/* <Button  tripCost={cost}  onClick={() => sendOrder(options, tripCost)}>
            Order now!
          </Button> */}
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  cost: PropTypes.string,
  tripCost: PropTypes.string,
  options: PropTypes.object || PropTypes.array,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
