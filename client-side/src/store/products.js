import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchProducts= createAsyncThunk("products",async()=>{
    const response =await axios.get("http://localhost:5000/api/v1/products");
    return response.data
})

export const fetchProduct=createAsyncThunk("product",async(id)=>{
    const response=await axios.get("http://localhost:5000/api/v1/recipes/" +id)
    console.log(response.data,"from store")
    return response.data
})






export const productSlice = createSlice({
  name: 'products',
  initialState: {
    product: null,
    products:{
        items:[],
        count:0
    },
  },
  reducers: {},
  extraReducers: (builder) => {
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
          state.products.items=action.payload;
      })
      builder.addCase(fetchProduct.fulfilled, (state, action) => {
          state.product=action.payload;
      })
  }
});

export default productSlice.reducer;