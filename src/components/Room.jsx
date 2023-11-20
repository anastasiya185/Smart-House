import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Products from './Products';

export default function Room({ room, onToggleProducts }) {
    const [openProductsMap, setOpenProductsMap] = useState({})


    const toggleProductsSection = (roomId) => {
        setOpenProductsMap(prevState => ({
            ...prevState,
            [roomId]: !prevState[roomId],
        }));
    };

    return (
        <div>
        <div
            className='roomDiv'
            style={{ backgroundColor: room.color }}
        >
            <button
                className='roomButton'
                style={{ backgroundColor: room.color }}
                onClick={() => toggleProductsSection(room.id)}
            >
                {room.name}
            </button>
        </div>
    {openProductsMap[room.id] && <Products room={room} />}
        </div>
    );
}