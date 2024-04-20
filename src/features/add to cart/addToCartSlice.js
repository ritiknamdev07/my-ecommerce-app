import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:[]};

export const addToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.value.push(action.payload)
            
        },
    },
})

export const { addToCart } = addToCartSlice.actions

export default addToCartSlice.reducer