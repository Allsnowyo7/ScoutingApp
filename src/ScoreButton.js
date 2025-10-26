import { useState } from 'react';

export function ScoreButton({title, count, setCount}) { 
  
    function add() {
      setCount(count + 1);
    }
    function sub() {
      setCount(count - 1);
    }
  
     return (
      <div>
        <p1> {title}: {count}</p1>
      <button onClick={add}>
        +1
      </button>
       <button onClick={sub}>
        -1
      </button>
      </div>
    );
  }
