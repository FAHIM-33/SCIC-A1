import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOutUser, setCredentials } from "../slice/userSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://library-v2-theta.vercel.app',
    // baseUrl: 'http://localhost:5000',
    // credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        console.log(getState());
        const token = getState().user.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
})


const baseQueryWithReAuth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.originalStatus === 403) {
        console.log("status 403. Sending refresh token. Would have been valid but expired.");
        const refreshResult = await ('/refresh', api, extraOptions)
        console.log('refresh Result is: ', refreshResult);
        if (refreshResult?.data) {
            const user = api.getState().user.user;
            api.dispatch(setCredentials({ ...refreshResult.data, user }))
        } else {
            api.dispatch(logOutUser())
        }
    }
    return result;
}

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['all-books', 'anotherTagName', 'borrowedBooks', 'category-book', 'singleBook'],
    endpoints: () => ({})

})

export default baseApi;