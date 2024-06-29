import { configureStore } from "@reduxjs/toolkit";
import versoinDate from "../slice/counterSlice";
import baseApi from "../query/baseApi";
import userReducer from "../slice/userSlice";
import userSlice from "../slice/userSlice";


export const store = configureStore({
    reducer: {
        versionData: versoinDate,
        userSlice: userReducer,
        [baseApi.reducerPath]: baseApi.reducer,
        auth: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
})