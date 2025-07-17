import { createSlice } from "@reduxjs/toolkit";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./productActions";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FETCH_PRODUCTS_REQUEST, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FETCH_PRODUCTS_SUCCESS, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.total = action.payload.length;
      })
      .addCase(FETCH_PRODUCTS_FAILURE, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
