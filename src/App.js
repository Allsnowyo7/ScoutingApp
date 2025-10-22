import './App.css';
import { ScoreButton } from './ScoreButton';
import {useState} from 'react';
import axios from 'axios';



function App() {
const [countL1, setCountL1] = useState(0);
const [countL2, setCountL2] = useState(0);
const [countL3, setCountL3] = useState(0);
const [countL4, setCountL4] = useState(0);

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const objt = ["Match: 1"];

//   axios
//     .post(
//       'https://script.google.com/macros/s/AKfycbwNluKKBqlj7pUOjcYYnyCfO86rPxd5E4FJixmpldCHjkY5u8LP2woVBfJNnamv1gA/exec',
//       ["Match: 1"]
//     )
//     .then((response) => {
//       console.log(response);
//     });
// };
 return (
   <div>
    <h1> test </h1>
    </div>
  );
}

export default App;