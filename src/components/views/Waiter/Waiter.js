import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.any,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.any,
    }),
    changeStatus: PropTypes.func,
  }

  state = {
    changeStatusVisibility: false,
    newOrderTable: 0,
    order: null,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(row){
    switch (row.status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.setStatus(row, 'thinking')}>thinking</Button>
            <Button onClick={() => this.handleNewOrder(row)}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => this.handleNewOrder(row)}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.setStatus(row, 'prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.setStatus(row, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.setStatus(row, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.setStatus(row, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  setStatus(row, status) {
    const { changeStatus } = this.props;
    row.status = status;
    row.order = (status === 'free' ? '' : row.order);
    changeStatus(row);
  }

  handleNewOrder(row) {
    this.setState({changeStatusVisibility: true, newOrderTable: row.id});
  }

  handleSubmitOrder() {
    const tables = this.props.tables;
    const {newOrderTable, order} = this.state;

    tables.forEach((element) => {
      if (element.id === newOrderTable) {
        element.order = order;
        this.setStatus(element, 'ordered');
      }
    });

    this.resetState();
  }

  handleInputChange(event) {
    this.setState({order: event.target.value});
  }
  
  resetState() {
    this.setState({changeStatusVisibility: false, newOrderTable: 0, order: null});
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
          
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <form className={`${styles.form} ${this.state.changeStatusVisibility ? styles.active : ''}`} noValidate autoComplete="off">
            <div className={styles.inputContainer}>
              <Button 
                className={styles.closeButton}
                onClick={() => this.resetState()}
              >
                <div className={styles.close}>
                  <span></span>
                  <span></span>
                </div>
              </Button>
              <Typography variant="body2" component="p">
                Table: {this.state.newOrderTable} <br></br> 
              </Typography>
              <TextField className="input" id="order" label="Order" onChange={(event) => this.handleInputChange(event)}/>
              <Button onClick={() => this.handleSubmitOrder()}>Submit</Button>
            </div>
          </form>
        </Paper>
      );
    }
  }
}

export default Waiter;