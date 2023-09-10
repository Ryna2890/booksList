import React from "react";

export const cardSmallStyles: React.CSSProperties = {
    width: 200,
    margin: `0px ${24}px`
}

export const cardBigStyles: React.CSSProperties = {
    width: `${100}%`
}

export const cardBodyStyle = (single?: boolean) => {
    const styles: React.CSSProperties = {
        display: 'flex',
        gap: 8,
        justifyContent: 'space-between',
        flexDirection: single ? 'row' : 'column'
    }
    return styles
}

export const cardBodyContentStyle = (single?: boolean) => {
    const style: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: single ? `${50}%` : undefined
    }
    return style
}

export const cardImageContainer = (single?: boolean) => {
    const style: React.CSSProperties = {
        width: single ? `${300}px` : `${100}%`,
        maxHeight: 350
    }
    return style
}

export const imageStyle: React.CSSProperties = {
    width: `${100}%`,
    height: `${100}%`,
    objectFit: 'contain'
}
