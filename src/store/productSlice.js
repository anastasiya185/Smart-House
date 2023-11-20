import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    // products: [
    //     { id: '1', text: "Lamp" },
    //     { id: '2', text: "Air Conditioner" },
    //     { id: '3', text: "Boiler" },
    //     { id: '4', text: "Stereo System" },
    //     { id: '5', text: "TV" },
    // ]
    productsByRoom: {},
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const { roomId, product } = action.payload;
            state.productsByRoom = {
                ...state.productsByRoom,
                [roomId]: [...(state.productsByRoom[roomId] || []), product],
            };
        },
        deleteProduct: (state, action) => {
            const { roomId, productId } = action.payload;
            state.productsByRoom[roomId] = state.productsByRoom[roomId].filter(
                (product) => product.id !== productId
            );
        }, 
    }
})

export const {addProduct, deleteProduct} = productSlice.actions;

export default productSlice.reducer;