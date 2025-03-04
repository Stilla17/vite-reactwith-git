import React from 'react'

function Button({ text, className }) {
    return (
        <>
            <button className={`px-[34px] py-2 ${className}`}>{text}</button>
        </>
    )
}

export default Button