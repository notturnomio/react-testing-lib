/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderTestApp } from './tests/helpers/renderTestApp';
import Navbar from './components/Navbar/Navbar';

describe('TEST Routers', () => {
  test('checks routers', async () => {
    renderTestApp(<Navbar />, {
      route: '/',
      initialState: { counter: { value: 0 } },
    });
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    await act(async () => {
      userEvent.click(aboutLink);
    });
    expect(await screen.findByTestId('about-page')).toBeInTheDocument();
    await act(async () => {
      userEvent.click(mainLink);
    });
    expect(await screen.findByTestId('main-page')).toBeInTheDocument();
  });

  test('checks wrong routers', async () => {
    renderTestApp(null, {
      route: '/broken-path',
      initialState: { counter: { value: 0 } },
    });

    expect(await screen.findByTestId('error-page')).toBeInTheDocument();
  });
});
