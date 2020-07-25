import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tables = ({id}) => (
  <div className={styles.component}>
    <Link to='/booking/new'>
      <div>
        <span>New booking</span>
      </div>
    </Link>
    <Link to={`/booking/${id}`}>
      <div>
        <span>Booking id: {id}</span>
      </div>
    </Link>
    <Link to='/event/new'>
      <div>
        <span>New Event</span>
      </div>
    </Link>
    <Link to={`/event/${id}`}>
      <div>
        <span>Event id: {id}</span>
      </div>
    </Link>
    <h2>Tables view</h2>
  </div>
);

Tables.propTypes = {
  id: PropTypes.any,
};

Tables.defaultProps = {
  id: '123abc',
};

export default Tables;
