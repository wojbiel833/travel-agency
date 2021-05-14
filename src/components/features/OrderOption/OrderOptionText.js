import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import styles from './OrderOption.scss';

const OrderOptionText = ({ id, name, type, setOptionValue }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section className={styles.text}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label type={type} id={id}>
          <input
            name="text"
            onChange={e => setOptionValue(e.currentTarget.value)}
            type="text"
            ref={register({ required: true })}
          />
          {name}
          {errors.text && <span>This field is required</span>}
        </label>
      </form>
    </section>
  );
};

OrderOptionText.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
