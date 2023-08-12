import {createSlice} from '@reduxjs/toolkit'

 const initialState = {
        isLogged: false,
        isLoading: false, 
        isError: false, 
        currentUser: '', 
    }

export const logInSlice = createSlice({
    name: 'logIn',
   initialState,
    reducers:{
         logIn: (state) =>{
            state.isLoading = true;
         }, 
         logInSuccess: (state) =>{
            state.isLoading = false;
            state.isLogged = true; 
            state.isError = false; 
         },
         logInError: (state) =>{
            state.isLoading = false;
            state.isError = true;
         },
         setCurrentUser: (state, action) => {
        state.currentUser = action.payload;
    }
    }
    })

export default logInSlice.reducer