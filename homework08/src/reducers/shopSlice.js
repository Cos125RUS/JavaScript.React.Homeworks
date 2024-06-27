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
            if (state.cart.filter(product => product.id === action.payload.id).length > 0) {
                state.cart.filter(product => product.id === action.payload.id)[0].count += 1;
            } else {
                state.cart.push({...action.payload, count: 1});
            }
        },
        changeCount: (state, action) => {
            state.cart.filter(product => product.id === action.payload.id)[0].count = action.payload.count;
        },
        deleteFromCart: (state, action) => {
            state.cart.splice(state.cart.indexOf(state.cart.filter(product => product.id === action.payload.id)[0]), 1)
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

export const {addToCart, changeCount, deleteFromCart} = shopSlice.actions;
export default shopSlice.reducer;