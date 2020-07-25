import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const demoContent = [
  {id: '1', order: 123},
  {id: '2', order: 234},
  {id: '3', order: 345},
  {id: '4', order: 456},
  {id: '5', order: 567},
  {id: '6', order: 678},
];

const Kitchen = () => (
  <Paper className={styles.component}>
    {demoContent.map(order => (
      <Card key={order.id} className={styles.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {order.id}
          </Typography>
          <Typography variant="body2" component="p">
            {order.order}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Done</Button>
        </CardActions>
      </Card>
    ))}
  </Paper>
);

export default Kitchen;
