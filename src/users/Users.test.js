/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-debugging-utils */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderTestApp } from '../tests/helpers/renderTestApp';

describe('Users component', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
          },
        ]),
    });
  });

  test('renders a list of users', async () => {
    renderTestApp(null, {
      route: '/users',
    });

    const users = await screen.findAllByTestId('user-item');
    expect(users).toHaveLength(4);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test('handles network errors', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));
    renderTestApp(null, {
      route: '/users',
    });

    await expect(screen.findByText(/Error/i)).rejects.toThrow(Error);
  });

  test('redirect to user details page', async () => {
    renderTestApp(null, {
      route: '/users',
    });

    const users = await screen.findAllByTestId('user-item');
    expect(users).toHaveLength(4);
    await act(async () => {
      userEvent.click(users[0]);
    });
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });
});
