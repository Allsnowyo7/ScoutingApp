import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Button({count, onClick}) {
   return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
function App() {
 const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }
  function sub() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count} </h1>
      <Button count={count} onClick={add} />
      <Button count={count} onClick={sub} />
    </div>
  );
}

export default App;
