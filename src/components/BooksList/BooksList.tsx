import {selectAllBooks, selectTotalItems, useAppSelector} from "../../app/hooks";
import React from "react";
import {Col, Row, Typography} from "antd";
import {BookCard} from "../BookCard/BookCard";
import {Link} from "react-router-dom";
import {LoadingSection} from "../LoadingSection/LoadingSection";

export const BooksList: React.FC = () => {
    const books = useAppSelector(selectAllBooks);
    const totalItems = useAppSelector(selectTotalItems);

    const {Text} = Typography

    return <>
        {books.length > 0 && <Row justify={"center"}>
            <Text style={{display: 'block'}} strong>{`Total ${totalItems}  books found`}</Text>
        </Row>}
        <Row
            style={{flexWrap: 'wrap'}}
            gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            {books.length > 0 && books.map((book, index) => (
                <Col className="gutter-row" style={{cursor: 'pointer',padding: '8px 0'}} key={index}>
                    <Link role='link' to={`/book/${book.id}`}  >
                    <BookCard {...book}  />
                    </Link>
                </Col>
            ))}
        </Row>
        <Row justify={"center"}> <LoadingSection/></Row>
    </>
}