import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function MainPage() {

    const currentUser = useSelector(state => state.logIn.currentUser);
    const navigate = useNavigate();

    const redirectToCreateRoomPage = () => {
        navigate('/createroom', { replace: true })
    }

    return (

        <div className='mainPageDiv'>

            <h1 className='titleNameMainPage'>{currentUser}'s home:</h1>
            <Fab color="primary" aria-label="add" onClick={redirectToCreateRoomPage}>
                <AddIcon />
            </Fab>
            <h1 className='titleMainPage'>No Rooms Added!</h1>
        </div>
    )
}
