import { createSlice } from "@reduxjs/toolkit";

const today = new Date().getDate()

const a = {
    version: 2,
    lastUpdate: today
}

export const versionSlice = createSlice({
    name: 'versionSlice',
    initialState: a,
    reducers: {
        update: (state) => {
            console.log(state);
        }
    }
})

export default versionSlice.reducer
export const { update, } = versionSlice.actions