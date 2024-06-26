import {createAsyncThunk} from "@reduxjs/toolkit";
import {catalogProductData} from "../../data/catalogProductData";

const catalogProductLoader = createAsyncThunk(
    'shop/catalogProducts/CatalogProductLoader', async () => {
        return await new Promise(
            resolve => setTimeout(() => resolve(catalogProductData), 1000)
        ).then(catalogProducts => catalogProducts);
    }
);

export default catalogProductLoader;