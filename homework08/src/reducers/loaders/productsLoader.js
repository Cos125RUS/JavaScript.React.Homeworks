import {createAsyncThunk} from "@reduxjs/toolkit";
import {catalogData} from "../../data/catalogData";
import {productsData} from "../../data/productsData";

const productsLoader = createAsyncThunk(
    'shop/products/productsLoader', async () => {
        return await new Promise(
            resolve => setTimeout(() => resolve(productsData), 1000)
        ).then(products => products);
    }
);

export default productsLoader;