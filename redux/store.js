import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "./slice";
import productReducer from "./Productslice";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        //auth: authReducer,
        product: productReducer
    }
});

export default store;