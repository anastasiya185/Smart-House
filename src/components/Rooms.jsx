import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import Products from './Products';


export default function Rooms() {
    const [openProductsMap, setOpenProductsMap] = useState({})
    const rooms = useSelector(state => state.rooms.rooms);
    const currentUser = useSelector(state => state.logIn.currentUser);
    const navigate = useNavigate();

    const redirectToCreateRoomPage = () => {
        navigate('/createroom', { replace: true })
    }

    const toggleProductsSection = (roomId) => {
        setOpenProductsMap(prevState => ({
            ...prevState,
            [roomId]: !prevState[roomId],
        }));
    };

    return (
        <div className='roomsDiv'>
            <h1 className='titleNameMainPage'>{currentUser}'s home:</h1>
            {rooms.map((room, index) => (
                <div
                    className='roomDiv'
                    key={room.id}
                    style={{ backgroundColor: room.color }}>
                    <button className='roomButton'
                        style={{ backgroundColor: room.color }}
                        onClick={() => toggleProductsSection(room.id)}>{room.name}</button>
                    {openProductsMap[room.id] && <Products onClose={() => toggleProductsSection(room.id)} />}
                </div>
            ))}
            <Fab color="primary" aria-label="add" onClick={redirectToCreateRoomPage}>
                <AddIcon />
            </Fab>
        </div>
    )
}
