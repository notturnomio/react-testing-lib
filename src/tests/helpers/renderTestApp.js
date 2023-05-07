import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import counterReducer from '../../store/reducers/counterReducer';
import { configureStore } from '@reduxjs/toolkit';
import AppRouter from '../../router/AppRouter';

export const renderTestApp = (component, options) => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: options?.initialState,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
