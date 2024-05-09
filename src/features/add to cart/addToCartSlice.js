import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

export const addToCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeTOCart: (state, action) => {
      state.value = state.value.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addToCart, removeTOCart } = addToCartSlice.actions;

export default addToCartSlice.reducer;
