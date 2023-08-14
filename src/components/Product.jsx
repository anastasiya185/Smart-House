import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../store/productSlice'
import Switch from '@mui/material/Switch';

export default function Product({ id, text }) {
    const label = { inputProps: { 'aria-label': 'Switch demo' } }
    const dispatch = useDispatch()

    return (
        <div>
            <Switch {...label} defaultChecked />
            <span>{text}</span>
            <span onClick={() => dispatch(deleteProduct({ id }))} className='deleteButton'>&times;</span>

        </div>
    )
}
