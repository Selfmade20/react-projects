import React from 'react';
import './App.css';
import Keypad from './Components/Keypad';
import Results from './Components/Results';
import Logic from './Components/Logic';


function App() {
  return (
    <div className="App">
    <Logic/>
    <Keypad/>
    <Results/>
    </div>
  );
}

export default App;
