import {BookCardProps} from "../components/BookCard/BookCard";
import {IBooksModels} from "../features/Books/books.models";

export const getAllBooks = (arr: IBooksModels)=>{
    const books: BookCardProps[] = arr.items.map((item) => {
        return {
            authors: item.volumeInfo.authors,
            title: item.volumeInfo.title,
            category: item.volumeInfo.categories,
            src: item.volumeInfo.imageLinks?.thumbnail,
            id: item.id,
            description:item.volumeInfo.description
        }
    })
    return books;
}