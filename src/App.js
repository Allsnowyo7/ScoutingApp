import './App.css';
import { ScoreButton } from './ScoreButton';
import {useState} from 'react';
import axios from 'axios';



function App() {
const [countL1, setCountL1] = useState(0);
const [countL2, setCountL2] = useState(0);
const [countL3, setCountL3] = useState(0);
const [countL4, setCountL4] = useState(0);

const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post(
      'https://scoutingapp.edelvalle26.workers.dev',
     {Match: "1", L1: countL1, L2: countL2, L3: countL3, L4: countL4},
     {headers: { "Content-Type": "application/json" },  withCredentials: false}
    )
.then((res) => console.log("✅ Success:", res.data))
.catch((err) => console.error("❌ Error:", err.response || err.message));
};
 return (
   <div>
    <h1> imConfused </h1>
    <ScoreButton title={"l1"} count={countL1} setCount={setCountL1}/>
    <ScoreButton title={"l2"} count={countL2} setCount={setCountL2}/>
    <ScoreButton title={"l3"}count={countL3} setCount={setCountL3}/>
    <ScoreButton title={"l4"}count={countL4} setCount={setCountL4}/>
    <button title='submit' onClick={handleSubmit}/>
    </div>
  );
}

export default App;