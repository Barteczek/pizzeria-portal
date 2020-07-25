import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// const demoContent = [
//   {
//     'id': 1,
//     'date': '2020-07-27',
//     'hour': '12:30',
//     'table': 1,
//     'repeat': false,
//     'duration': 4,
//     'ppl': 3,
//     'starters': [],
//   },
//   {
//     'id': 2,
//     'date': '2020-07-28',
//     'hour': '16:00',
//     'table': 3,
//     'repeat': 'daily',
//     'duration': 2,
//     'ppl': 3,
//     'starters': ['bread', 'lemonWater'],
//   },
//   {
//     'id': 3,
//     'date': '2020-07-29',
//     'hour': '12:00',
//     'table': 3,
//     'repeat': 'daily',
//     'duration': 2,
//     'ppl': 3,
//     'starters': ['bread', 'lemonWater'],
//   },
// ];

const times = [];
let time = 12*60;

for (let i=0; time < 24*60; i++) {
  let hh = Math.floor(time/60);
  let mm = (time%60);
  times[i] = (hh + ':' + (mm + '0').slice(0, 2));
  time = time + 30;
}

const Tables = ({id}) => (
  <Paper className={styles.component}>
    <form  noValidate>
      <TextField
        id='datetime-local'
        label='Date and time'
        type='datetime-local'
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Hours</TableCell>
          <TableCell>Table 1</TableCell>
          <TableCell>Table 2</TableCell>
          <TableCell>Table 3</TableCell>
          <TableCell>Table 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {times.map(time => (
          <TableRow key={time}>
            <TableCell>
              {time}
            </TableCell>
            <TableCell>
            </TableCell>
            <TableCell>
            </TableCell>
            <TableCell>
            </TableCell>
            <TableCell>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    {/* <Link to='/booking/new'>
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
    </Link> */}
  </Paper>
);

Tables.propTypes = {
  id: PropTypes.any,
};

Tables.defaultProps = {
  id: '123abc',
};

export default Tables;
