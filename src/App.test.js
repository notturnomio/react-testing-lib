/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from '@testing-library/react';
import App from './App';
import { renderTestApp } from './tests/helpers/renderTestApp';

test('render App page', async () => {
  renderTestApp(<App />, { route: '/' });
  const app = screen.getByTestId('app');
  expect(app).toBeInTheDocument();
});
