import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  rooms: [],
  сurrentRoomName: '', 
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
    }, 

    setCurrentRoomName: (state, action) =>{
        state.сurrentRoomName = action.payload
    }
  },
});

export const { addRoom } = roomsSlice.actions;

export default roomsSlice.reducer;