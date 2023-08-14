import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [
        { id: '1', text: "Lamp" },
        { id: '2', text: "Air Conditioner" },
        { id: '3', text: "Boiler" },
        { id: '4', text: "Stereo System" },
        { id: '5', text: "TV" },
    ]
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        },
        deleteProduct: (state, action) =>{
            state.products = state.products.filter(product => product.id !== action.payload.id)
        }, 
    }
})

export const {addProduct, deleteProduct} = productSlice.actions;

export default productSlice.reducer;