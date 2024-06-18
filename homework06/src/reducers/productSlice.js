import {createSlice} from "@reduxjs/toolkit";
import Product from "../entity/product";
import {addProductReducer} from "./addProductReducer";
import {removeProductReducer} from "./removeProductReducer";
import {updateProductReducer} from "./updateProductReducer";

export const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: [
            new Product("iPhone", "Необоснованно дорогое распиаренное барахло", 100_000),
            new Product("Samsung", "Ладно, эти хотя бы на морозе не разряжаются и не требуют от тебя слишком многого", 80_000),
            new Product("Honor", "В самый раз", 70_000),
            new Product("Xiaomi", "Здесь уже есть вопросы к надёжности", 50_000),
        ]
    },
    reducers: {
        addProduct: addProductReducer,
        removeProduct: removeProductReducer,
        updateProduct: updateProductReducer
    }
});

export const {addProduct, removeProduct, updateProduct} = productSlice.actions;
export default productSlice.reducer;