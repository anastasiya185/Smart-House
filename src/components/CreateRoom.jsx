import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRoom } from '../store/createRoomSlice'
import { Select, InputLabel, MenuItem, FormControl, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreateRoom() {
    const [rooms, setRooms] = useState([])
    const [roomName, setRoomName] = useState('');
    const [floor, setFloor] = useState('')
    const [selectedColor, setSelectedColor] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const currentUser = useSelector(state => state.logIn.currentUser);

    const handleChange = (event) => {
        setRooms(event.target.value);
    };

    const chooseFloor = (event) => {
        setFloor(event.target.value);
    }

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const CreateRoom = () => {
        if (roomName && selectedColor) {
            const newRoom = {
                name: roomName,
                color: selectedColor,
            };
            dispatch(addRoom(newRoom));
            navigate(`/rooms/${selectedColor}`);
        } else {
            alert("Please fill in all fields.");
        }
    };



    return (
        <div className='createRoomDiv'>
            <h1 className='titleNameMainPage'>{currentUser}'s home:</h1>
            <Box>
                <FormControl className='createRoomInput'>
                    <InputLabel>Choose a new room</InputLabel>
                    <Select
                        value={rooms}
                        label="Room"
                        onChange={handleChange}>
                        <MenuItem value="Bedroom">Bedroom</MenuItem>
                        <MenuItem value="Bathroom">Bathroom</MenuItem>
                        <MenuItem value="Toilet">Toilet</MenuItem>
                        <MenuItem value="Kitchen">Kitchen</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box>
                <TextField className='createRoomInput'
                    label="Room Name"
                    variant="outlined"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)} />
            </Box>

            <Box>
                <FormControl className='createRoomInput'>
                    <InputLabel>Room Color</InputLabel>
                    <Select value={selectedColor} onChange={handleColorChange}>
                        <MenuItem value="red">Red</MenuItem>
                        <MenuItem value="green">Green</MenuItem>
                        <MenuItem value="blue">Blue</MenuItem>
                        <MenuItem value="black">Black</MenuItem>
                        <MenuItem value="white">White</MenuItem>
                        <MenuItem value="yellow">Yellow</MenuItem>
                        <MenuItem value="purple">Purple</MenuItem>
                        <MenuItem value="pink">Pink</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box>
                <FormControl className='createRoomInput'>
                    <InputLabel>Choose floor</InputLabel>
                    <Select
                        value={floor}
                        label="Floor"
                        onChange={chooseFloor}>
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Button variant="contained" onClick={CreateRoom}>Create</Button>


        </div>
    )
}

