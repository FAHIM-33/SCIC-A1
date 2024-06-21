import baseApi from "./baseApi";

const borrowApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getBorrowedBooks: builder.query({
            query: (email) => `/api/v1/borrowed/?email=${email}`,
            providesTags: (result, error, email) => [{ type: 'borrowedBooks', id: email }]
        }),

        returnBorrowedBook: builder.mutation({
            query: ({ data, email }) => ({
                url: '/api/v1/update-quantity/?operation=increase',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: (result, error, { email }) => [{ type: 'borrowedBooks', id: email }, 'category-book']
        }),

        decreaseQty: builder.mutation({
            query: ({ data }) => ({
                url: '/api/v1/update-quantity/?operation=decrease',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: () => [{ type: 'category-book' }, 'borrowedBooks']
        }),

        deleteBorrowed: builder.mutation({
            query: ({ id, email }) => ({
                url: `/api/v1/return-borrowed/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, { email }) => [{ type: 'borrowedBooks', id: email }]
        })
    })
})

export const { useGetBorrowedBooksQuery, useReturnBorrowedBookMutation, useDeleteBorrowedMutation, useDecreaseQtyMutation } = borrowApi