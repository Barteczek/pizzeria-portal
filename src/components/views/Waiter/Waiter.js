import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Waiter = ({id}) => (
  <div className={styles.component}>
    <Link to='/order/new'>
      <div>
        <span>Order New</span>
      </div>
    </Link>
    <Link to={`/order/${id}`}>
      <div>
        <span>Order id: {id}</span>
      </div>
    </Link>
    <h2>Waiter view</h2>
  </div>
);

Waiter.propTypes = {
  id: PropTypes.any,
};

Waiter.defaultProps = {
  id: '123abc',
};

export default Waiter;
