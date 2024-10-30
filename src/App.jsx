import React, { useState } from 'react';
import RatingCard from './components/RatingCard';
import './App.css';
import ResultCard from './components/ResultCard';

const App = () => {
  const [showResult, setShowResult] = useState(false)
  const [num, setNum] = useState(null);
  return (
    <>
      {
        showResult === true ? <ResultCard num={num}/> : <RatingCard setShowResult={setShowResult} num={num} setNum={setNum}/>
      }
    </>
  );
}

export default App
