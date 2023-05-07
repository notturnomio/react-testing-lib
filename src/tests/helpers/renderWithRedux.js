import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import counterReducer from '../../store/reducers/counterReducer';

export const renderWithRedux = (component, initialState) => {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
  });

  return render(<Provider store={store}>{component}</Provider>);
};
