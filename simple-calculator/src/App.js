import React from 'react';
import './App.css';
import Keypad from './Components/Keypad';
import Results from './Components/Results';

function App() {
  return (
    <div className="App">
      <div>Simple Calculator</div>
    <Keypad/>
    <Results/>
    </div>
  );
}

export default App;
