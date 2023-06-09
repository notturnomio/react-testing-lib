/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from '@testing-library/react';
import Navbar from './Navbar';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('TEST Navbar', () => {
  test('tests main link', async () => {
    renderTestApp(<Navbar />, { route: '/' });
    const mainLink = screen.getByTestId('main-link');
    await act(async () => {
      userEvent.click(mainLink);
    });
    expect(await screen.findByTestId('main-page')).toBeInTheDocument();
  });
  test('tests about link', async () => {
    renderTestApp(<Navbar />, { route: '/' });
    const aboutLink = screen.getByTestId('about-link');
    await act(async () => {
      userEvent.click(aboutLink);
    });
    expect(await screen.findByTestId('about-page')).toBeInTheDocument();
  });
  test('tests users link', async () => {
    renderTestApp(<Navbar />, { route: '/' });
    const usersLink = screen.getByTestId('users-link');
    await act(async () => {
      userEvent.click(usersLink);
    });
    expect(await screen.findByTestId('users-page')).toBeInTheDocument();
  });
});
