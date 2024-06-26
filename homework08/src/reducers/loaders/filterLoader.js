import {filterData} from "../../data/filterData";
import {createAsyncThunk} from "@reduxjs/toolkit";

const filterLoader = createAsyncThunk(
    'shop/filter/filterLoader', async () => {
        return await new Promise(
            resolve => setTimeout(() => resolve(filterData), 1000)
        ).then(filter => filter);
    }
);

export default filterLoader;