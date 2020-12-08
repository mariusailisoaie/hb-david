import React from 'react';
import './App.css';

import Fireworks from './components/Fireworks';
import Confetti from './components/Confetti';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Birthday David!</h1>
        <Fireworks />
        <Confetti />
      </header>
    </div>
  );
}

export default App;
