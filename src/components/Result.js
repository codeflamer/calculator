import React from 'react'

const Result = ({result,symbol1,symbol2,inputed}) => {
    return (
        <div className='container-result'>
           {inputed}{symbol1} is {result}{symbol2}
        </div>
    )
}

export default Result
