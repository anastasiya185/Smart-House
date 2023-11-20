import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/productSlice'
import Product from './Product'

export default function Products({ room }) {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.productsByRoom[room.id] || []);


    const addProductToRoom = () => {
        dispatch(addProduct({ roomId: room.id, product: { id: Date.now(), text } }));
        setText('');
    };


    return (
        <div className='productsDiv'>
            {products.map((product) => (
                <Product key={product.id} roomId={room.id} {...product} />
            ))}
            <input
                className='createProductInput'
                type='text'
                value={text}
                placeholder="Enter your product..."
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addProductToRoom} className='buttonAddProduct'>
                Add
            </button>
        </div>
    )
}

