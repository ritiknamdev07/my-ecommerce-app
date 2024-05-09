import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice from '../features/add to cart/addToCartSlice';
import productsReducer from '../features/products-details/setProductsSlice';

export const store = configureStore({
    reducer: {
        cart: addToCartSlice,
        setProduct: productsReducer,
        
    },
  
})