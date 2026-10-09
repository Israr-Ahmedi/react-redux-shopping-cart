import { createSlice } from "@reduxjs/toolkit";


// ========================================
// CART SLICE
// ========================================

const initialState = {

    //Persist - localStorageData
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

const addToCart = createSlice({

    name: "cart",

    initialState,

    reducers: {

        addItem: (state, action) => {
            console.log(action)
            state.items.push(action.payload)
            localStorage.setItem('cart', JSON.stringify(state.items))
        },

        rmvItem: (state, action) => {
            // state.value -= 1 && state.value != 0;
            const cartData = state.items.filter((item) => item.id !== action.payload.id)
            state.items = cartData;
            localStorage.setItem('cart', JSON.stringify(state.items))
        },

        clrItem: (state) => {
            state.items = [];
            localStorage.removeItem('cart')
        }

    }

});


// ========================================
// AUTH SLICE
// ========================================

// const authInitialState = {
//     user: null,
//     isLoggedIn: false
// };

// const authSlice = createSlice({

//     name: "auth",

//     initialState: authInitialState,

//     reducers: {

//         // LOGIN
//         login: (state, action) => {

//             state.user = action.payload;

//             state.isLoggedIn = true;
//         },


//         // LOGOUT
//         logout: (state) => {

//             state.user = null;

//             state.isLoggedIn = false;
//         }

//     }

// });


// ========================================
// ACTIONS
// ========================================

export const { addItem } = addToCart.actions;
export const { rmvItem } = addToCart.actions;
export const { clrItem } = addToCart.actions;


// export const {
//     login,
//     logout
// } = authSlice.actions;


// ========================================
// REDUCERS
// ========================================

export const cartReducer = addToCart.reducer;

//export const authReducer = authSlice.reducer;