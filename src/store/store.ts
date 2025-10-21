import { configureStore } from '@reduxjs/toolkit';
import experimentReducer from './experimentSlice';

export const store = configureStore({
  reducer: { experiment: experimentReducer },
  devTools: true,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

