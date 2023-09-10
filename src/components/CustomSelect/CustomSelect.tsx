import React from "react"
import {Select, Typography} from "antd"
import {ISelect} from "../../shared /consts"

interface CustomSelectProps {
    select: ISelect
    onChange: (value: string, type: string) => void
}

export const CustomSelect: React.FC<CustomSelectProps> = ({select, onChange}) => {
    const {Text} = Typography

    return (
        <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
            {select.text && <Text>{select.text}</Text>}
            <Select
                defaultValue={select.defaultValue}
                style={{width: 120}}
                onChange={(value) => onChange(value, select.type)}
                options={select.options}
            />
        </div>
    )
}
