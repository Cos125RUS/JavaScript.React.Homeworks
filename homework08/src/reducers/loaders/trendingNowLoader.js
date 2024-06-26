import {createAsyncThunk} from "@reduxjs/toolkit";
import {trendingNowData} from "../../data/filter/trendingNowData";

const trendingNowLoader = createAsyncThunk(
    'shop/trendingNow/trendingNowLoader', async () => {
        return await new Promise(
            resolve => setTimeout(() => resolve(trendingNowData), 1000)
        ).then(trendingNow => trendingNow);
    }
);

export default trendingNowLoader;