/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

test('render App page', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
