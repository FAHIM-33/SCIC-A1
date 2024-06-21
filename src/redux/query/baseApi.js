import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: 'apiName',
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'https://library-v2-theta.vercel.app' }),
    tagTypes: ['all-books', 'anotherTagName', 'borrowedBooks', 'category-book', 'singleBook'],
    endpoints: () => ({})
})

export default baseApi;