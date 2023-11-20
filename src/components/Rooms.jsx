import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import { useSelector } from 'react-redux';
import Room from './Room';
import Products from './Products';


export default function Rooms() {
    const rooms = useSelector(state => state.rooms.rooms);
    const currentUser = useSelector(state => state.logIn.currentUser);
    const navigate = useNavigate();

    const redirectToCreateRoomPage = () => {
        navigate('/createroom', { replace: true })
    }


    return (
        <div className='roomsDiv'>
            <h2 className='titleNameMainPage'>{currentUser}'s home:</h2>
            <div className="roomContainer">

                    {rooms.map((room, index) => (
                            <Room key={room.id} room={room}/>
                        ))}
            </div>

            <Fab color="primary" aria-label="add" onClick={redirectToCreateRoomPage}>
                <AddIcon />
            </Fab>
        </div>
    )
}
