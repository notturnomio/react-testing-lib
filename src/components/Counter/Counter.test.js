/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('TEST Counter', () => {
  test('checks decrement click', async () => {
    renderTestApp(null, {
      route: '/',
      initialState: { counter: { value: 0 } },
    });
    const decrBtn = screen.getByTestId('decrement-btn');
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
    await act(async () => {
      userEvent.click(decrBtn);
    });
    expect(counterValue).toHaveTextContent('-1');
  });
  test('checks increment click', async () => {
    renderTestApp(null, {
      route: '/',
      initialState: { counter: { value: 10 } },
    });
    const decrBtn = screen.getByTestId('increment-btn');
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue.innerHTML).toBe('10');
    await act(async () => {
      userEvent.click(decrBtn);
    });
    expect(counterValue.innerHTML).toBe('11');
  });
});
