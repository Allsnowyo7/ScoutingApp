import './App.css';
import { ScoreButton } from './ScoreButton';
import {useState} from 'react';
import {DownloadJSON} from './export';



function App() {
const [countL1, setCountL1] = useState(0);
const [countL2, setCountL2] = useState(0);
const [countL3, setCountL3] = useState(0);
const [countL4, setCountL4] = useState(0);
 return (
   <div>
      <ScoreButton count = {countL1} setCount={setCountL1} />
      <ScoreButton count = {countL2} setCount={setCountL2} />
      <ScoreButton count = {countL3} setCount={setCountL3} />
      <ScoreButton count = {countL4} setCount={setCountL4} />

      <div>
        <button>
          <DownloadJSON data= {[{L1: countL1}, {L2: countL2}, {L3: countL3}, {L4: countL4}]}/>
        </button>
      </div>
    </div>
  );
}

export default App;
