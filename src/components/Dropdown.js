import React from 'react';


const Dropdown = ({units,value,handleValue}) => {
    return (
        <div className={value}>
            <h4>{value}</h4>
            <select name={value} onChange={(e)=>handleValue(e)}>
                <optgroup label={value}>
                {units.map((unit)=>{
                    return (
                        <option key={unit.name} value={[unit.name,unit.sym].join(' ')}>{unit.name}({unit.sym})</option>
                    )
                })}
                </optgroup>
            </select>

        </div>
    )
}

export default Dropdown
