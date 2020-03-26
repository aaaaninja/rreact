import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { add, decrement, increment, del } from '../actions/counter';
import Counter from '../components/Counter';
import { CounterState } from '../reducer';

interface StateProps {
  count: number;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

interface DispatchProps {
  add: (amount: number) => void;
  del: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: amount => dispatch(add(amount)),
  del: amount => dispatch(del(amount)),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
