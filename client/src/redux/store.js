import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartRedux'
import productReducer from './productSlice'

export default configureStore({
    reducer:{
        cart :cartReducer,
        product: productReducer,
    },
})
