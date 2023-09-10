import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { apiSlice } from "../features/Books/books.api.slice"
import booksSliceReducer from "../features/booksSlice";

export const store = configureStore({
  reducer: {
    booksSlice:booksSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
