import {initialSearchParams} from "../shared /consts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IbooksSliceState} from "./Books/books.models";
import {BookCardProps} from "../components/BookCard/BookCard";


const initialState:IbooksSliceState = initialSearchParams


export const booksSlice = createSlice({
    name: 'booksSlice',
    initialState,
    reducers: {
        updateSearchAndResetIndex: (state, action:PayloadAction<string>) => {
            state.skip = false // Чтобы активировать useQuery
            state.startIndex = 0
            state.search = action.payload
        },
        enableSkip: (state) => {
            state.skip = true
        },
        incrementStartIndex: (state, action: PayloadAction<number>) => {
            state.skip = false // Чтобы активировать useQuery
            state.startIndex += action.payload
        },
        addBooks: (state, action:PayloadAction<BookCardProps[]>) => {
            if (!action.payload) {
                state.books = []
            }
            if (state.startIndex === 0) {
                state.books = action.payload
            } else {
                state.books = [...state.books, ...action.payload]
            }
        },
        resetBooks: (state) => {
            state.books = []
        },
        updateTotalItemsResponse: (state, action) => {
            state.totalItems = action.payload
        },
        updateCategory: (state, action:PayloadAction<string>) => {
            state.category = action.payload
            state.startIndex = 0
            if (state.search) {
                state.skip = false // Чтобы активировать useQuery
            }
        },
        updateSorting: (state, action) => {
            state.orderBy = action.payload
            state.startIndex = 0
            if (state.search) {
                state.skip = false // Чтобы активировать useQuery
            }
        },
    },
})

export const {
    addBooks,
    resetBooks,
    enableSkip,
    incrementStartIndex,
    updateSearchAndResetIndex,
    updateCategory,
    updateSorting,
    updateTotalItemsResponse
} = booksSlice.actions

export default booksSlice.reducer