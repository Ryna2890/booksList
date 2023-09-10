import {IbooksSliceState, IQuery} from "../features/Books/books.models";

interface IOptions {
    value: string
    label: string
}

export interface ISelect {
    type: string;
    options: IOptions[]
    defaultValue: string
    text: string
}

export const dataSelect: ISelect[] = [
    {
        type: 'category',
        text: "Category",
        defaultValue: "all",
        options: [
            {value: "all", label: "all"},
            {value: "art", label: "art"},
            {value: "biography", label: "biography"},
            {value: "computers", label: "computers"},
            {value: "history", label: "history"},
            {value: "medical", label: "medical"},
            {value: "poetry", label: "poetry"},
        ],
    },
    {
        type: "orderBy",
        text: "Sorting by",
        defaultValue: "newest",
        options: [
            {value: "relevance", label: "relevance"},
            {value: "newest", label: "newest"},
        ],
    },
]

export const initialSearchParams: IbooksSliceState = {
    category: 'all',
    orderBy: 'newest',
    search: '',
    startIndex: 0,
    skip: true,
    books: [],
    totalItems:0
}

export const BOOKS_PER_PAGE = 30