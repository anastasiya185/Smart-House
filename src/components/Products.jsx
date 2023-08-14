import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../store/productSlice'
import Product from './Product'

export default function Products() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    const addProducts = () => {
        dispatch(addProduct({ text }))
        setText(' ')
    }


    return (
        <div className='productsDiv'>
            {products.map(product => <Product
                key={product.id}
                id={product.id}
                text={product.text} />)}
            <input
                className='createRoomInput'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button onClick={addProducts} className='buttonAddProduct'>Add</button>

        </div>
    )
}
