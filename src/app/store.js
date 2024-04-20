import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice from '../features/add to cart/addToCartSlice';
export const store = configureStore({
    reducer: {
        cart: addToCartSlice
    },
})