import { createSlice } from "@reduxjs/toolkit";

const initial = {
    user: null,
    token: null
}
export const userSlice = createSlice({
    name: 'user',
    initialState: initial,
    reducers: {
        loginUser: (state, actions) => {
            state.user = actions.payload.user
            state.token = actions.payload.token
            console.log("attempt login user");
        },
        logOutUser: (state) => {
            state.user = null
            state.token = null
            console.log('attemting logout user');
        },
        setCredentials: () => {
            console.log('do some shit wiht setting credentials');
        }
    }
})

export const { loginUser, logOutUser, setCredentials } = userSlice.actions
export default userSlice.reducer