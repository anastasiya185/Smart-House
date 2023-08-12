import {createAction} from '@reduxjs/toolkit';
import {roomsSlice} from './createRoomSlice'

export const roomsAction = () => async (dispatch) =>{
    try{
        dispatch(roomsSlice.actions.addRoom());

        setTimeout(()=>{
            // dispatch (roomsSlice.actions.createRoomSuccess())
        }, 2000);
    }catch(e) {
        // dispatch(roomsSlice.actions.createRoomError())
    }
}

// export const setCurrentRoomName = createAction('rooms/setCurrentRoomName')

