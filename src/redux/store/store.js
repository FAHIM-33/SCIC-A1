import { configureStore } from "@reduxjs/toolkit";
import versoinDate from "../slice/counterSlice";
import baseApi from "../query/baseApi";
import userReducer from "../slice/userSlice";


export const store = configureStore({
    reducer: {
        versionData: versoinDate,
        user: userReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
})