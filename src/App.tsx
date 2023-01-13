import React, { useState } from 'react';
import calculateIntegral from './Utils/calculateIntegral';
import './Styles/App.scss';

// The code of this project is a mess but it works and since it has a deadline I don't want to spend time cleaning it up.
// Sorry for that. :)
function App() {
  const [mathFunction, setMathFunction] = useState<string>('');
  const [rectangleNum, setRectangleNum] = useState<number>(0);
  const [lowerLimit, setLowerLimit] = useState<number>(0);
  const [upperLimit, setUpperLimit] = useState<number>(0);

  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = () => {
    if (mathFunction === '' || rectangleNum === 0 || lowerLimit === 0 || upperLimit === 0 || lowerLimit >= upperLimit || lowerLimit === upperLimit) {
      alert('Controlla i dati inseriti.');
      return;
    }

    const res = calculateIntegral(mathFunction, rectangleNum, lowerLimit, upperLimit);
    setResult(res);
  }

  const handleNegative = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = '';
    alert('Inserisci un numero positivo.');
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
          <input type="number" placeholder='b' className='upper' onChange={(e) => { setUpperLimit(parseInt(e.target.value)) }}></input>
          <input type="number" placeholder='a' className='lower' onChange={(e) => { setLowerLimit(parseInt(e.target.value)) }}></input>
        </div>
        <div className='function'>
          <input type="text" placeholder='f(x)' onChange={(e) => { setMathFunction(e.target.value) }} ></input>
        </div>
        <div className='differential'>
          <h1>dx</h1>
        </div>
        <div className='equal'>
          <h1 onClick={(e) => { handleSubmit() }}>=</h1>
        </div>
        {result ?
          <div className="result-container">
            <h1>{result}</h1>
          </div> :
          <div className="result-container">
            <h1>Per il risultato, premi '='.</h1>
          </div>
        }
      </div>
      <div className='rectanglenum'>
        <h1>Numero di rettangoli</h1>
        <input type="number" onChange={(e) => { setRectangleNum(parseInt(e.target.value)) }} />
      </div>
    </div>
  );
};

export default App;
