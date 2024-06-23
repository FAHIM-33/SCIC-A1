import baseApi from "./baseApi";


const booksApi = baseApi.injectEndpoints({
    endpoints: builder => ({

        getAllBooks: builder.query({
            query: () => `/api/v1/all-books`,
            providesTags: ['all-books']
        }),

        getOneBook: builder.query({
            query: (productID) => `/api/v1/Abook/${productID}`,
            providesTags: (result, error, productID) => [{ type: 'singleBook', id: productID }]
        }),

        getCategoryBook: builder.query({
            query: (category) => `/api/v1/all-books/?category=${category}`,
            providesTags: (result, error, category) => [{ type: "category-book", id: category }]

        }),
        addBook: builder.mutation({
            query: ({book, email}) => ({
                url: `/api/v1/addBook/?email=${email}`,
                method: 'POST',
                body: book
            }),
            invalidatesTags: ['all-books'],
        }),
        updateBook: builder.mutation({
            query: ({book, id}) => ({
                url: `/app/v1/update/${id}`,
                method: 'PUT',
                body: book
            }),
            invalidatesTags: ['all-books'],
        })


    })
})

export const { useGetAllBooksQuery, useGetCategoryBookQuery, useGetOneBookQuery, useAddBookMutation , useUpdateBookMutation} = booksApi; 