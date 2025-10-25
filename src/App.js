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

  const objt = ["Match: 1"];

  axios
    .post(
      'https://scoutingapp.edelvalle26.workers.dev',
     {Match: "1"},
     {headers: { "Content-Type": "application/json" },  withCredentials: false}
    )
.then((res) => console.log("✅ Success:", res.data))
.catch((err) => console.error("❌ Error:", err.response || err.message));
};
 return (
   <div>
    <h1> imConfused </h1>
    <button onClick={handleSubmit}/>
    </div>
  );
}

export default App;