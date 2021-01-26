import React from 'react'

const Button = ({calculateInput}) => {
    return (
        <>
            <button type='submit' onClick={(e)=>calculateInput(e)}>Convert</button>
        </>
    )
}

export default Button
