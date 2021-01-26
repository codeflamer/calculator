import React from 'react'
import Button from './Button'
import Dropdown from './Dropdown'

const MiddleContent = ({units,calculateInput,handleValue,handleSecondValue}) => {
    return (
        <div className='middlesec'>
                <section>
                    <Dropdown  units={units} value='From' handleValue={handleValue}/> 
                    <Dropdown units={units} value='To' handleValue={handleSecondValue}/> 
                </section>
                <div>
                    <Button calculateInput={calculateInput}/>
                </div>
        </div>
    )
}

export default MiddleContent
