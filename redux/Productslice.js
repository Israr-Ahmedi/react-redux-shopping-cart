import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// API call
export const fetchproducts = createAsyncThunk(
    "product",
    async () => {
        const resp = await fetch("https://dummyjson.com/products");
        //console.log(resp)

        const jsonresp = await resp.json();

        return jsonresp.products;
    }
);

const initialState = {
    items: [],
    status: "",
    error: null
};

const productSlice = createSlice({
    name: "product",
    initialState,

    extraReducers: (builder) => {

        // API request start
        // builder.addCase(fetchproducts.pending, (state) => {
        //     state.status = "loading";
        // });

        // API request successful
        builder.addCase(fetchproducts.fulfilled, (state, action) => {
            state.status = "success";
            state.items = action.payload;
        });

        // API request failed
        // builder.addCase(fetchproducts.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // });
    }
});

export default productSlice.reducer;