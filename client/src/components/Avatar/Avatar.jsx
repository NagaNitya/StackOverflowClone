import React from 'react'

const Avatar = ({children,  backgroundColor, px, py, color, borderRadius, fontSize, cursor, height, width, }) => {
    const style={
        backgroundColor,
        color: color || 'black',
        padding: `${py}px ${px}px`,
        borderRadius,
        fontSize,
        alignItems: 'center',
        textAlign: 'center',
        cursor: cursor || null,
        textDecoration: "none",
        height: height || '30px',
        width: width || '30px',
        lineHeight: height || '30px',
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Avatar