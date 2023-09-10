import React from "react";
import {Empty, Tag} from "antd";
import  {cardTag} from './Styles'

interface TagsProps {
    tags: string[]|undefined;
    full?: boolean;
}

export const Tags: React.FC<TagsProps> = ({tags, full}) => {

    const emptyStyle: React.CSSProperties = {
        margin: 8
    }

    if (full) return <> {tags ? tags.map((tag, index) => (
            <Tag color="blue" style={cardTag} key={index}>{tag}</Tag>
        )) :
        <Empty style={emptyStyle} image={Empty.PRESENTED_IMAGE_SIMPLE}/>}</>
    return <> {
        tags ? <Tag color="blue"  style={cardTag}>{tags[0]}</Tag> :
            <Empty style={emptyStyle} image={Empty.PRESENTED_IMAGE_SIMPLE}/>
    }</>
}