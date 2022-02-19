import { createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkAPI) => {
        try { const {data} = await axios.get('/products/')
        return data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error);
      }});
      const addProduct = createAsyncThunk(
          'products/addProducts',
          async(products,thunkAPI) => {
              try {
                  const {data} = await axios.post('products',products);
                  return data
              }
              catch (error) {
                return thunkAPI.rejectWithValue(error);
              }
          }
      )
      const onDelete = createAsyncThunk(
          'products/deleteProduct',
          async(productId,thunkAPI) => {
              try {
                  const {data} = await axios.delete(`products/${productId}`);
                  return productId
                
              }
              catch(error) {
                  return thunkAPI.rejectWithValue(error)
              }
          }
      )
      const patchProduct = createAsyncThunk(
          'products/patchProduct',
          async({productId,newData},thunkAPI) => {
              try {
                  const {data} = await axios.patch(`products/${productId}`,newData)
                  return data
              }
              catch (error) {
                  return thunkAPI.rejectWithValue(error)
              }
          }
      )
const operations = {
    getProducts,
    addProduct,
    onDelete,
    patchProduct
}
export default operations;