import {createSlice} from "@reduxjs/toolkit";
import {catalogLoader} from "./loaders/catalogLoader";
import {offerLoader} from "./loaders/offerLoader";
import productsLoader from "./loaders/productsLoader";
import advantagesLoader from "./loaders/advantagesLoader";
import filterLoader from "./loaders/filterLoader";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        cart: [],
        catalog: [],
        offers: [],
        products: [],
        advantages: [],
        filter: {},
    },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(catalogLoader.fulfilled, (state, {payload}) => {
                state.catalog = payload;
            })
            .addCase(offerLoader.fulfilled, (state, {payload}) => {
                state.offers = payload;
            })
            .addCase(productsLoader.fulfilled, (state, {payload}) => {
                state.products = payload;
            })
            .addCase(advantagesLoader.fulfilled, (state, {payload}) => {
                state.advantages = payload;
            })
            .addCase(filterLoader.fulfilled, (state, {payload}) => {
                state.filter = payload;
            })
    }
});

export const {addToCart} = shopSlice.actions;
export default shopSlice.reducer;