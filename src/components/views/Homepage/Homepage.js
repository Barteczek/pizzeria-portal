import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const demoStats = [
  {date: '27.07.2020', inhouse: '$400.00', delivery: '$150.00', total: '$550.00'},
  {date: '28.07.2020', inhouse: '$500.00', delivery: '$250.00', total: '$750.00'},
  {date: '29.07.2020', inhouse: '$600.00', delivery: '$350.00', total: '$950.00'},
];

const demoBookings = [
  {
    'id': 1,
    'date': '2020-07-27',
    'hour': '12:30',
    'table': 1,
    'repeat': false,
    'duration': 4,
    'ppl': 3,
    'starters': [],
  },
];


const Homepage = () => (
  <div className={styles.component}>
    <Paper className={styles.paper}>
      <Typography variant="h5" component="h2">
        Sale statistics
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Inhouse</TableCell>
            <TableCell>Delivery</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoStats.map(row => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell>
                {row.inhouse}
              </TableCell>
              <TableCell>
                {row.delivery}
              </TableCell>
              <TableCell>
                {row.total}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.paper}>
      <Typography variant="h5" component="h2">
        Today bookings and events
      </Typography>
      {demoBookings.map(booking => (
        <Card key={booking.id}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Booking: {booking.id}
            </Typography>
            <Typography variant="body2" component="p">
              {booking.date} <br></br> 
              {booking.hour} <br></br> 
              Table: {booking.table} <br></br> 
              No. of people {booking.ppl}
            </Typography>
          </CardContent>
        </Card>
      ))}
        
    </Paper>
  </div>
  
);

export default Homepage;
