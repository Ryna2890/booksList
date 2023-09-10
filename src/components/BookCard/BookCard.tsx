import React from "react"
import {Card, Typography, Empty} from "antd"
import {Tags} from "../Tags/Tags";
import {
    cardBigStyles,
    cardBodyContentStyle,
    cardBodyStyle,
    cardImageContainer,
    cardSmallStyles,
    imageStyle
} from "./Styles";
import Paragraph from "antd/es/typography/Paragraph";

export interface BookCardProps {
    src: string | undefined;
    title: string;
    authors: string[];
    category: string[] | undefined;
    id?: string;
    single?: boolean;
    description?: string | undefined;
}

export const BookCard: React.FC<BookCardProps> = ({description, single, authors, category, title, src}) => {
    const {Text} = Typography

    const emptyStyle: React.CSSProperties = {
        margin: 8
    }

    return (
        <Card style={single ? cardBigStyles : cardSmallStyles} bodyStyle={cardBodyStyle(single)}>
            {
                src ? <div style={cardImageContainer(single)}><img src={src} style={imageStyle}/></div> :
                    <Empty style={emptyStyle} image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            }
            <div style={cardBodyContentStyle } className={single?'cardBodyContent':''}>
                <Tags tags={category} full={single}/>
                <Paragraph strong ellipsis={{ rows: 2, expandable: true }}>{title}</Paragraph>
                {
                    authors ? <Text style={{display: 'block'}} italic>{authors.join(', ')}</Text> :
                        <Empty style={emptyStyle} image={Empty.PRESENTED_IMAGE_SIMPLE}/>
                }
                {
                    single && description ? <Text style={{display: 'block'}}>{description}</Text> :
                       single? <Empty style={emptyStyle} image={Empty.PRESENTED_IMAGE_SIMPLE}/>:null
                }
            </div>

        </Card>
    )
}
