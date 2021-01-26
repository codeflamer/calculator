import React,{useState,useRef} from 'react'
import Input from './components/Input'
import MiddleContent from './components/MiddleContent'
import Result from './components/Result';
import './App.css';

const App = () => {

  const [InputValue,SetInputValue] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [units,SetUnits] = useState([{name:'meters',sym:'m'},{name:'milimeters',sym:'mm'},{name:'centimeters',sym:'cm'},{name:'decimeters',sym:'dm'}]);
  const [result,setResult] = useState();
  const [firstUnit,setFirstUnit] = useState({name:'meters',sym:'m'});
  const [secondUnit,setSecondUnit] = useState({name:'meters',sym:'m'});
  const inputEl = useRef(null);
  const [val,setVal] = useState('');
  const [symbol,setSymbol] = useState([]);

  const EditValue = (value)=>{
    SetInputValue(value);
  }

  const calculator = (InputValue,action,value)=>{
    if(action === 'multiply'){
     return  parseFloat(InputValue) * value;
    }
    if(action === 'divide'){
       return  parseFloat(InputValue) / value;
    }
  }

  const calculateInput = (e)=>{
    setVal(InputValue)
    setSymbol([firstUnit.sym,secondUnit.sym])
    if(InputValue){
     if (firstUnit.name === 'meters' && secondUnit.name ==='meters'){
      alert('You cannot select the same unit of conversation');
    }
    if (firstUnit.name === 'milimeters' && secondUnit.name ==='milimeters'){
      alert('You cannot select the same unit of conversation');
    }
      if (firstUnit.name === 'centimeters' && secondUnit.name ==='centimeters'){
      alert('You cannot select the same unit of conversation');
    }
      if (firstUnit.name === 'decimeters' && secondUnit.name ==='decimeters'){
      alert('You cannot select the same unit of conversation');
    }

    if (firstUnit.name === 'meters' && secondUnit.name ==='milimeters'){
      const value = calculator(InputValue,'multiply',1000) 
      setResult(value);
      
    }
    if (firstUnit.name === 'meters' && secondUnit.name ==='centimeters'){
      const value = calculator(InputValue,'multiply',100) 
      setResult(value);
    }
    if (firstUnit.name === 'meters' && secondUnit.name ==='decimeters'){
      const value = calculator(InputValue,'multiply',10) 
      setResult(value);
    }
    if (firstUnit.name === 'milimeters' && secondUnit.name ==='meters'){
      const value = calculator(InputValue,'divide',1000) 
      setResult(value);
    }
    if (firstUnit.name === 'centimeters' && secondUnit.name ==='meters'){
       const value = calculator(InputValue,'divide',100) 
       setResult(value);
    }
    if (firstUnit.name === 'decimeters' && secondUnit.name ==='meters'){
      const value = calculator(InputValue,'divide',10) 
       setResult(value);
    }



    if (firstUnit.name === 'milimeters' && secondUnit.name ==='centimeters'){
      const value = calculator(InputValue,'divide',10) 
      setResult(value);
    }
    if (firstUnit.name === 'milimeters' && secondUnit.name ==='decimeters'){
      const value = calculator(InputValue,'divide',100) 
      setResult(value);
    }
    if (firstUnit.name === 'centimeters' && secondUnit.name ==='milimeters'){
       const value = calculator(InputValue,'multiply',10) 
       setResult(value);
    }
    if (firstUnit.name === 'decimeters' && secondUnit.name ==='milimeters'){
      const value = calculator(InputValue,'multiply',100) 
       setResult(value);
    }
    if (firstUnit.name === 'centimeters' && secondUnit.name ==='decimeters'){
      const value = calculator(InputValue,'divide',10) 
       setResult(value);
    }
    if (firstUnit.name === 'decimeters' && secondUnit.name ==='centimeters'){
       const value = calculator(InputValue,'multiply',10) 
       setResult(value);
    }
    }
    else{
      alert('Enter a number in the input box');
      inputEl.current.focus();
    }
  }

  const handleObject = (e)=>{
    const obj = e.target.value.split(' ');
    const unit = obj[0];
    const symbol = obj[1];
    return {name:unit,sym:symbol};
  }

  const handleValue =(e)=>{
    const value = handleObject(e);
    setFirstUnit(value);
  }

  const handleSecondValue = (e) =>{
    const value = handleObject(e);
    setSecondUnit(value);
  }

  return (
    <div className='container'>
      <Input reff={inputEl} val={InputValue} func={EditValue}/>
      <MiddleContent units={units} calculateInput={calculateInput} handleValue={handleValue} handleSecondValue={handleSecondValue}/>
      {result? <Result inputed={val} result={result} symbol1={symbol[0]} symbol2={symbol[1]}/>: null} 
    </div>
  )
}

export default App
