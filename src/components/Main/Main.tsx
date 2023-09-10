import React, {useCallback} from "react"
import { Layout, Row, Space} from "antd"
import {Content, Header} from "antd/es/layout/layout"
import Search from "antd/es/input/Search"
import {dataSelect} from "../../shared /consts"
import {CustomSelect} from "../CustomSelect/CustomSelect"
import {useAppDispatch} from "../../app/hooks";
import {
    updateCategory,
    updateSearchAndResetIndex,
    updateSorting
} from "../../features/booksSlice";
import {contentStyle, headerStyle, rowStyle} from "./Styles";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

export const Main: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const onSearch = useCallback((value: string) => {
        navigate('/')
        dispatch(updateSearchAndResetIndex(value))
    },[])

    const handleChange = useCallback((value: string, type: string) => {
        if (type === 'category') {
            navigate('/')
            dispatch(updateCategory(value))
        } else {
            navigate('/')
            dispatch(updateSorting(value))
        }

    },[])



    return (
        <Space direction="vertical" style={{width: "100%"}} size={[0, 48]}>
            <Layout>
                <Header style={headerStyle}>
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        enterButton
                        allowClear
                    />
                    <Row style={rowStyle}>
                        {dataSelect.map((select, index) => (
                            <CustomSelect
                                select={select}
                                key={index}
                                onChange={handleChange}
                            />
                        ))}
                    </Row>
                </Header>
                <Content style={contentStyle}>
                    <Outlet/>
                </Content>
            </Layout>
        </Space>
    )
}
