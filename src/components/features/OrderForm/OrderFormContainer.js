import { connect } from 'react-redux';

import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => {
  const options = getOrderOptions(state, props.options);

  return { options };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: newOrderOption => dispatch(setOrderOption(newOrderOption)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
