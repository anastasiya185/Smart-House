import { createAction } from '@reduxjs/toolkit';
import  {logInSlice}  from './logInSlice';

export const logInAction = () => async (dispatch) => {
  try {
    dispatch(logInSlice.actions.logIn());

    // await {...}
    // make request on server

    setTimeout(() => {
      dispatch(logInSlice.actions.logInSuccess());
    }, 2000);
  } catch (e) {
    dispatch(logInSlice.actions.logInError());
  }
};


export const setCurrentUser = createAction('logIn/setCurrentUser');