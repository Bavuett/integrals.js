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
        <form onSubmit={ (e) => { handleSubmit(e) } }>
          <label>Your function: </label>
          <input type="text" name="function" onChange={(e) => { setMathFunction(e.target.value)} } />
          <label>Number of rectangles: </label>
          <input type="number" name="rectanglenum" onChange={ (e) => {setRectangleNum(parseInt(e.target.value))} }/>
          <label>Lower limit of integration interval: </label>
          <input type="number" name="lower" onChange={ (e) => {setLowerLimit(parseInt(e.target.value))} }/>
          <label>Upper limit of integration interval: </label>
          <input type="number" name="upper" onChange={ (e) => {setUpperLimit(parseInt(e.target.value))} }/>
          <button>Submit</button>
        </form>
      </div>
      { result ? <div className="result-container">
        <h2>Result: {result}</h2>
      </div> : null }
    </div>
  );
};

export default App;
