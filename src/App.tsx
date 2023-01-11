import React, {useState} from 'react';
import calculateIntegral from './Utils/calculateIntegral';
import './Styles/App.scss';

function App() {
  const [mathFunction, setMathFunction] = useState<string>('');
  const [rectangleNum, setRectangleNum] = useState<number>(0);
  const [lowerLimit, setLowerLimit] = useState<number>(0);
  const [upperLimit, setUpperLimit] = useState<number>(0);

  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
          <input type="number" className='upper'></input>
          <input type="number" className='lower'></input>

        </div> 
        <div className='function'>
          <input type="text"></input>
        </div>
      </div>
      { result ? <div className="result-container">
        <h2>Result: {result}</h2>
      </div> : null }
    </div>
  );
};

export default App;
