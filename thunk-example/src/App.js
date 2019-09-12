import React from 'react';

import './App.css';
import Users from './containers/Users'
import Books from './containers/Books'
import Computers from './containers/Computers';


function App() {
  return (
    <div className="App">
      <Users />
      <Books />
      <Computers/>
    </div>
  );
}

export default App;
