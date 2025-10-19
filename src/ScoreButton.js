import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function ScoreButton({
  title = "replace",
  backgroundColor = '#6c6c6cff'
}) {

  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function sub() {
    setCount(count - 1);
  }
  return (
    <div className="ScoreButtonContainer" style={{ backgroundColor }}>
      <h1 className = "ScoreButtonHeading">{title}</h1>
      <p1> Count: {count}</p1>
      <div>
        <button onClick={add}>
          +1
        </button>
        <button onClick={sub}>
          -1
        </button>
      </div>

    </div>
  );
}