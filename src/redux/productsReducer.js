import { createSlice } from "@reduxjs/toolkit";
import operations from "./productsOperations";
const productsSlice  = createSlice({
    name:'product',
    initialState:{
        data: [],
        isOpen: false,
        loading: false,
        error:null,
    },
    reducers: {
        modalMode : (state,action) => {
            return {...state, isOpen: action.payload}
        }
    },
    extraReducers: {
 [operations.getProducts.pending](state,action) {
     return {
         ...state,
         loading:true,
         error:null,
     }
 },
 [operations.getProducts.fulfilled](state,action) {
    return {
        ...state,
        data:action.payload,
        loading:false,
        error:null,
    }
},
[operations.getProducts.rejected](state,action) {
    return {
        ...state,
        loading:false,
        error:action.payload,
    }
},
[operations.addProduct.pending](state,action) {
    return {
        ...state,
        loading:true,
        error:null,
    }
},
[operations.addProduct.fulfilled](state,action) {
    return {
        ...state,
        data: [...state.data, action.payload],
        loading:false,
        error:null,
    }
},
[operations.addProduct.rejected](state,action) {
    return {
        ...state,
        loading:false,
        error:action.payload,
    }
},
[operations.onDelete.pending](state,action) {
    return {
        ...state,
        loading:true,
        error:null,
    }
},
[operations.onDelete.fulfilled](state,action) {
    return {
        ...state,
         data:state.data.filter(product => product.id !== action.payload),
        loading:false,
        error:null,
    }
},
[operations.onDelete.rejected](state,action) {
    return {
        ...state,
        loading:false,
        error:action.payload,
    }
},
[operations.patchProduct.pending](state,action) {
    return {
        ...state,
        loading:true,
        error:null,
    }
},
[operations.patchProduct.fulfilled](state,action) {
    return {
        ...state,
        data: action.payload,
        loading:false,
        error:null,
    }
},
[operations.patchProduct.rejected](state,action) {
    return {
        ...state,
        loading:false,
        error:action.payload,
    }
},
    }
});
export const {modalMode} = productsSlice.actions;
export default productsSlice.reducer