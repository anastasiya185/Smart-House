
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logIn from './logInSlice'
import rooms from './createRoomSlice'


const rootReducer = combineReducers({
  logIn,
  rooms,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });