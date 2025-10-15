import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function ScoreButton() {
  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function sub() {
    setCount(count - 1);
  }

   return (
    <div>
      <p1>Count: {count}</p1>
    <button onClick={add}>
      +1
    </button>
     <button onClick={sub}>
      -1
    </button>
    </div>
  );
}
function App() {
 

  return (
    <div>
      <p>L1</p>
      <ScoreButton/>
      <p>L2</p>
      <ScoreButton/>
      <p>L3</p>
      <ScoreButton/>
      <p>L4</p>
      <ScoreButton/>
    </div>
  );
}

export default App;
