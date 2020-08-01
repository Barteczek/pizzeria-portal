import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, getLoadingState, changeAPI } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeStatus: (element) => dispatch(changeAPI({...element})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
