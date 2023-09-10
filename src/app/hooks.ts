import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "./store"
import {createSelector} from "@reduxjs/toolkit";
import {BOOKS_PER_PAGE} from "../shared /consts";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const selectStartIndex = (state: RootState) => state.booksSlice.startIndex
export const selectSkip = (state: RootState) => state.booksSlice.skip
export const selectInput = (state: RootState) => state.booksSlice.search
export const selectAllBooks = (state: RootState) => state.booksSlice.books
export const selectCategory = (state: RootState) => state.booksSlice.category
export const selectSorting = (state: RootState) => state.booksSlice.orderBy
export const selectTotalItems = (state: RootState) => state.booksSlice.totalItems

export const selectIsMoreResults = (state: RootState) =>
    state.booksSlice.totalItems > state.booksSlice.startIndex + BOOKS_PER_PAGE

/* Create Selectors */
export const selectIsAnyBooks = createSelector(selectAllBooks, (books) =>
    books ? !!books.length : 0
)

export const selectBookById = createSelector(
    [selectAllBooks, (state, id: string) => id],
    (books, id) => {
        return books.filter((book) => book.id === id)[0]
    }
)
