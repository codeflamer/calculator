import React from 'react'

const Input = ({val,func,reff}) => {
    return (
        <div class='input-container'>
            <h3>Amount</h3>
            <form onSubmit=''>
                <input ref={reff} type='number' placeholder='Enter your number here' value={val} onChange={(e)=>func(e.target.value)}/>
            </form>
        </div>
    )
}
export default Input
