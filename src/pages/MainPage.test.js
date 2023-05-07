/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, screen } from '@testing-library/react';
import { renderTestApp } from '../tests/helpers/renderTestApp';

describe('TEST MainPage', () => {
  test('checks sample page elements', () => {
    renderTestApp(null, {
      route: '/',
      initialState: { counter: { value: 0 } },
    });

    const input = screen.getByPlaceholderText(/input value/i);
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    // screen.debug();
  });

  test('tests no element', () => {
    renderTestApp(null, {
      route: '/',
      initialState: { counter: { value: 0 } },
    });

    const hello2 = screen.queryByText(/hello2/i);
    expect(hello2).toBeNull();
  });

  test('tests async element', async () => {
    renderTestApp(null, {
      route: '/',
      initialState: { counter: { value: 0 } },
    });

    // act(() => {
    //   jest.advanceTimersByTime(1000);
    // });
    const hello3 = await screen.findByTestId('async-text');
    expect(hello3).toBeInTheDocument();
    expect(hello3).toHaveStyle({ color: 'red' });
  });

  test('tests click', () => {
    renderTestApp(null, {
      route: '/',
      initialState: { counter: { value: 0 } },
    });

    const toggleBtn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elm')).not.toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('toggle-elm')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId('toggle-elm')).not.toBeInTheDocument();
  });

  test('tests input', () => {
    renderTestApp(null, {
      route: '/',
      initialState: { counter: { value: 0 } },
    });

    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elm')).toContainHTML('');
    fireEvent.input(input, {
      target: { value: '123' },
    });
    expect(screen.queryByTestId('value-elm')).toContainHTML('123');
    fireEvent.input(input, {
      target: { value: '' },
    });
    fireEvent.input(input, {
      target: { value: '12345' },
    });
    expect(screen.queryByTestId('value-elm')).toContainHTML('12345');
  });
});
