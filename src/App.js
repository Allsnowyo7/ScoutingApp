import './App.css';
import { ScoreButton } from './ScoreButton';

function App() {


  return (
    <div className='ScoreButtonGrid'>
      <ScoreButton title='L1' />
      <ScoreButton title='L2' />
      <ScoreButton title='L3' />
      <ScoreButton title='L4' />
    </div>
  );
}

export default App;
