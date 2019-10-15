import React from 'react';
import './App.css';
import Users from './containers/Users'
import Books from './containers/Books'
import Computers from './containers/Computers';


function App() {
  return (
    <div className="App">
      
      
      <div className="users"><Users /></div>
      <div className="books"><Books /></div>
      <div className="computers"><Computers/></div>
    </div>

    
  );
}

export default App;
