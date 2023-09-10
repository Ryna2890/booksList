import {BookCard} from "../BookCard/BookCard";
import {selectBookById, useAppSelector} from "../../app/hooks";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const CurrentBook: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const book = useAppSelector((state) => selectBookById(state, id!))

    useEffect(() => {
        if (!book) navigate('/')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        })
    }, [book])

    if (!book) return null
    return <BookCard
        src={book.src}
        title={book.title}
        authors={book.authors}
        category={book.category} single={true} description={book.description}/>
}