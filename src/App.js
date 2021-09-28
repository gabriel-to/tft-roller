import React, {useState} from 'react';
import './App.css';
import './Roll.js';
import rolljs from './Roll.js';
import Navbar from './Navbar';

function App() {
  const [gamba, setGamba] = useState(0)
  const [percent, setPercent] = useState(0)

  function activatePercent() {
    setPercent(rolljs.getPercent());
  }
  function activateGamba() { 
    setGamba(rolljs.rollChance());
  }
  
  return (
    <div className="App">
      <Navbar/>
      <form onsubmit="return false">
        <p>
          <label for="level">Level</label>
          <input type="number" id="level"></input>
        </p>
        <p>
          <label for="gold">Gold</label>
          <input type="number" id="gold"></input>
        </p>
        <p>
          <label for="cost">Unit cost</label>
          <input type="number" id="cost"></input>
        </p>
        <p>
          <label for="taken">Units taken</label>
          <input type="number" id="taken"></input>
        </p>
        <button id="gamba" type="button"onClick={() => {activateGamba(); activatePercent();}}>gamba</button>
      </form>
      <p>Average unit on rolldown: {gamba}</p>
      <p>Percent to hit at least one unit: {percent}%</p>
      <div className="footer">
        <p className="disclaimer">tft-roller isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. 
          League of Legends™ and Riot Games are trademarks or registered trademarks of Riot Games, Inc.</p>
        <p className="contact">Contact: togabriel@protonmail.com</p>
      </div>
    </div>
    
  );
}

export default App;
