import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/reducers/counterReducer';
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue';

export function Counter() {
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return (
    <div
      data-testid='counter-elm'
      style={{
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}
        data-testid='decrement-btn'
      >
        Decrement
      </button>
      <h2 data-testid='counter-value'>{count}</h2>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}
        data-testid='increment-btn'
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
