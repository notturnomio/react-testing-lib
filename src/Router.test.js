/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

describe('TEST Routers', () => {
  test('checks routers', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
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
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/broken-path']}>
          <App />
        </MemoryRouter>
      );
    });

    expect(await screen.findByTestId('error-page')).toBeInTheDocument();
  });
});
