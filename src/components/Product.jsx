import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addProduct, deleteProduct} from '../store/productSlice'
import Switch from '@mui/material/Switch';

export default function Product({ roomId, id, text }) {
    const label = { inputProps: { 'aria-label': 'Switch demo' } }
    const dispatch = useDispatch()

    const handleDeleteProduct = () => {
        dispatch(deleteProduct({ roomId, productId: id }));
    };

    return (
        <div>
            <Switch {...label} defaultChecked />
            <span>{text}</span>
            <span onClick={handleDeleteProduct} className='deleteButton'>&times;</span>

        </div>
    )
}
