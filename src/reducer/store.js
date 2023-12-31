import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';


const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        cart: cartReducer,
        order: orderReducer,
    }
})

export default store;
