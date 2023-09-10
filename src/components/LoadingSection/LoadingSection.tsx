import {
    selectCategory,
    selectInput,
    selectIsAnyBooks,
    selectIsMoreResults,
    selectSkip, selectSorting, selectStartIndex,
    useAppDispatch,
    useAppSelector
} from "../../app/hooks";
import {useGetALLBooksQuery} from "../../features/Books/books.api.slice";
import {Button, Empty, Spin} from "antd";
import React, {useEffect} from "react";
import {getAllBooks} from "../../shared /helpers";
import {addBooks, enableSkip, incrementStartIndex, updateTotalItemsResponse} from "../../features/booksSlice";
import {BOOKS_PER_PAGE} from "../../shared /consts";

export const LoadingSection:React.FC = ()=>{
    const search = useAppSelector(selectInput)
    const isSkip = useAppSelector(selectSkip)
    const orderBy = useAppSelector(selectSorting)
    const category = useAppSelector(selectCategory)
    const startIndex = useAppSelector(selectStartIndex)
    const isAnyBooks = useAppSelector(selectIsAnyBooks)
    const isMoreResults = useAppSelector(selectIsMoreResults)
    const {data,
        isFetching,
        isError,
        isUninitialized} = useGetALLBooksQuery({
        search,orderBy,category,startIndex},{skip:isSkip});
    const dispatch = useAppDispatch();


    const emptyStyle: React.CSSProperties = {
        margin: 8
    }
    const buttonMoreClick = () => {
        dispatch(incrementStartIndex(BOOKS_PER_PAGE))
    }

    useEffect(() => {
        return () => {
            !isSkip && dispatch(enableSkip())
        }
    }, [isSkip ])

    useEffect(() => {
        if (data) {
            const responseData = getAllBooks(data);
            dispatch(addBooks(responseData))

            startIndex === 0 && dispatch(updateTotalItemsResponse(data.totalItems))
        }
    }, [data])

    return <>
        {isFetching ? (
            <Spin tip="Loading" size="large">
                <div className="content"/>
            </Spin>
        ) : isError ? (
            <div>some Error</div>
        ) : isMoreResults ? (
            <Button type={"primary"} size={"large"} onClick={buttonMoreClick}>More</Button>
        ) : !isAnyBooks && !isUninitialized ? (
            <Empty style={emptyStyle} image={Empty.PRESENTED_IMAGE_SIMPLE}/>
        ) : isUninitialized ? (
            <div>Введите в поиск ключевые слова и я покажу здесь список книг 📚</div>
        ) : null}
    </>
}