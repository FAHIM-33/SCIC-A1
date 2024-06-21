import { configureStore } from "@reduxjs/toolkit";
import versoinDate from "../slice/counterSlice";
import baseApi from "../query/baseApi";


export const store = configureStore({
    reducer: {
        versionData: versoinDate,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
})