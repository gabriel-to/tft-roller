import React, {useState} from 'react';
import './App.css';
import './Roll.js';
import rollChance from './Roll.js';
import Navbar from './Navbar';

function App() {
  const [gamba, setGamba] = useState(0)

  function activateGamba() { 
    setGamba(rollChance());
  }
  
  return (
    <div className="App">
      <Navbar/>
      <form>
        <p>
          <label for="level">Level: </label>
          <input type="number" id="level"></input>
        </p>
        <p>
          <label for="gold">Gold: </label>
          <input type="number" id="gold"></input>
        </p>
        <p>
          <label for="cost">Unit cost:</label>
          <input type="number" id="cost"></input>
        </p>
        <p>
          <label for="taken">Units taken:</label>
          <input type="number" id="taken"></input>
        </p>
        <button onClick={activateGamba}>gamba</button>
        <p>avg unit on rolldown: {gamba}</p>
      </form>
      
    </div>
    
  );
}

export default App;
