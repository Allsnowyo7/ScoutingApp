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
    <button title='l1' onClick={setCountL1(countL1 + 1)}/>
    <button title='l2' onClick={setCountL2(countL2 + 1)}/>
    <button title='l3' onClick={setCountL3(countL3 + 1)}/>
    <button title='l4' onClick={setCountL4(countL4 + 1)}/>
    <button onClick={handleSubmit}/>
    </div>
  );
}

export default App;