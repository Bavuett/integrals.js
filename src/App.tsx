import React, {useState} from 'react';
import calculateIntegral from './Utils/calculateIntegral';
import './Styles/App.scss';

function App() {
  const [mathFunction, setMathFunction] = useState<string>('');
  const [rectangleNum, setRectangleNum] = useState<number>(0);
  const [lowerLimit, setLowerLimit] = useState<number>(0);
  const [upperLimit, setUpperLimit] = useState<number>(0);

  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = () => {

    const res = calculateIntegral(mathFunction, rectangleNum, lowerLimit, upperLimit);
    setResult(res);

  }

  return (
    <div className="app">
      <div className="title-container">
        <h1>Integrals.js</h1>
      </div>  
      <div className="form-container">
        
       <div className='integral'>
          <h1>∫</h1>
       </div>
       <div className='limits'>
          <input type="number" className='upper'  onChange={ (e) => {setUpperLimit(parseInt(e.target.value))} }></input>
          <input type="number" className='lower' onChange={ (e) => {setLowerLimit(parseInt(e.target.value))} }></input>

        </div> 
        <div className='function'>
          <input type="text" onChange={(e) => { setMathFunction(e.target.value)} } ></input>
        </div>
        <div className='differential'>
          <h1>dx</h1>
          </div>
        <div className='equal'>
          <h1 onClick={ (e) => { handleSubmit() } }>=</h1>
        </div>
      { result ? <div className="result-container">
        <h1>{result}</h1>
      </div> : null }

      </div>
      <div className='rectanglenum'>
        <h1>rectangle nums</h1>
        <input type="number" onChange={ (e) => {setRectangleNum(parseInt(e.target.value))} } />
      </div>
      
      
    </div>
  );
};

export default App;
