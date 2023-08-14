
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logIn from './logInSlice'
import rooms from './createRoomSlice'
import products from './productSlice';

const rootReducer = combineReducers({
  logIn,
  rooms,
  products, 
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });