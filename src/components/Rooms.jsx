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
            <h2 className='titleNameMainPage'>{currentUser}'s home:</h2>
            <div style={{display:"flex", flexWrap:"wrap", overflow:"auto", maxHeight:"400px"}}>

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
            </div>

            <Fab color="primary" aria-label="add" onClick={redirectToCreateRoomPage}>
                <AddIcon />
            </Fab>
        </div>
    )
}
