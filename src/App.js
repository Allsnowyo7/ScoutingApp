import './App.css';
import { ScoreButton } from './ScoreButton';
import { useState } from 'react';
import axios from 'axios';



function App() {
  const [countL1, setCountL1] = useState(0);
  const [countL2, setCountL2] = useState(0);
  const [countL3, setCountL3] = useState(0);
  const [countL4, setCountL4] = useState(0);
  const [matchNumber, setMatchNumber] = useState('');
  const [teamNumber, setTeamNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        'https://scoutingapp.edelvalle26.workers.dev',
        { Match: matchNumber, Team: teamNumber, L1: countL1, L2: countL2, L3: countL3, L4: countL4 },
        { headers: { "Content-Type": "application/json" }, withCredentials: false }
      )
      .then((res) => console.log("✅ Success:", res.data))
      .catch((err) => console.error("❌ Error:", err.response || err.message));
  };
  return (
    <div>
      <h1> Scouting App </h1>
      <input
        onChange={e => setMatchNumber(e.target.value)}
        placeholder="Enter Match Number"
        type="number"
      />
      <input
        value={teamNumber}
        onChange={e => setTeamNumber(e.target.value)}
        placeholder="Enter Team Number"
        type="number"
      />
      <ScoreButton title={"l1"} count={countL1} setCount={setCountL1} />
      <ScoreButton title={"l2"} count={countL2} setCount={setCountL2} />
      <ScoreButton title={"l3"} count={countL3} setCount={setCountL3} />
      <ScoreButton title={"l4"} count={countL4} setCount={setCountL4} />
      <button onClick={handleSubmit}>
        <p> submit</p>
      </button>
    </div>
  );
}

export default App;