import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';


export default function Rooms() {
    const rooms = useSelector(state => state.rooms.rooms);
    const currentUser = useSelector(state => state.logIn.currentUser);
    const navigate = useNavigate();

    const redirectToCreateRoomPage = () => {
        navigate('/createroom', { replace: true })
    }



    return (
        <div className='roomsDiv'>
            <h1 className='titleNameMainPage'>{currentUser}'s home:</h1>
            {rooms.map((room, index) => (
                <div key={index}
                    style={{ width: '100px', height: '100px', backgroundColor: room.color }}>{room.name}</div>
            ))}
            <Fab color="primary" aria-label="add" onClick={redirectToCreateRoomPage}>
                <AddIcon />
            </Fab>
        </div>
    )
}
