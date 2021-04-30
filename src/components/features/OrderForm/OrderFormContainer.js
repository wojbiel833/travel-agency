import { connect } from 'react-redux';

import OrderForm from './../../features/OrderForm/OrderForm';
import { getOrderOptions } from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => {
  const options = getOrderOptions(state, props.options);

  return options;
};

export default connect(mapStateToProps)(OrderForm);
