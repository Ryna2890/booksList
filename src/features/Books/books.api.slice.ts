import {BASE_URL, BOOKS_API_KEY} from "./books.const"
import {IBooksModels, IQuery} from "./books.models"
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {resetBooks} from "../booksSlice";
import {RootState} from "../../app/store";
import {BOOKS_PER_PAGE} from "../../shared /consts";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        mode: "cors",
    }),
    endpoints: (builder) => ({
        getALLBooks: builder.query<IBooksModels, IQuery>({
            query: (data) => {
                // url: `/volumes?q=${query.search}${query.category}&orderBy=${query.orderBy}&maxResults=40&startIndex=${query.startIndex}&key=${BOOKS_API_KEY}`,
                const startRequest = `volumes?q=${data.search}`
                const subject = data.category !== 'all' ? `+subject:${data.category}` : ''
                const startIndex = `&startIndex=${data.startIndex}`
                const maxResults = `&maxResults=${BOOKS_PER_PAGE}`
                const orderBy = `&orderBy=${data.orderBy}`
                return `${startRequest}${subject}${startIndex}${maxResults}${orderBy}&key=${BOOKS_API_KEY}`
            },
            async onQueryStarted(data, {dispatch, getState}) {
                const state = getState() as RootState
                state.booksSlice.startIndex === 0 && dispatch(resetBooks())
            }
        }),
    }),
})

export const {useGetALLBooksQuery} = apiSlice
