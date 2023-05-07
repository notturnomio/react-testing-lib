import counterReducer, { decrement, increment } from '../counterReducer';

describe('counterReducer', () => {
  test('tests increment', () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });
  test('tests decrement', () => {
    expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 });
  });
  test('tests empty state', () => {
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
    expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
  });
});
