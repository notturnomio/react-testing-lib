/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('TEST MainPage', () => {
  test('checks sample page elements', () => {
    render(<MainPage url='/' />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    // screen.debug();
  });

  test('tests no element', () => {
    render(<MainPage url='/' />);
    const hello2 = screen.queryByText(/hello2/i);
    expect(hello2).toBeNull();
  });

  test('tests async element', async () => {
    render(<MainPage url='/' />);
    // act(() => {
    //   jest.advanceTimersByTime(1000);
    // });
    const hello3 = await screen.findByTestId('async-text');
    expect(hello3).toBeInTheDocument();
    expect(hello3).toHaveStyle({ color: 'red' });
  });

  test('tests click', () => {
    render(<MainPage url='/' />);
    const toggleBtn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elm')).not.toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('toggle-elm')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId('toggle-elm')).not.toBeInTheDocument();
  });

  test('tests input', () => {
    render(<MainPage url='/' />);
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
