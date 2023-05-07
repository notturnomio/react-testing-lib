import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

export const store = (initialState = {}) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: initialState,
  });
};
