import React from 'react';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar'
import Users from './Containers/Users'
import Books from './Containers/Books'
import Computers from './Containers/Computers';


class App extends React.Component {

  
  render() {
    
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
       
        <main style={{ marginTop: '4%' }}>
        </main>
        <div className="container">
        <div className="users"><Users /></div>
        <div className="books"><Books /></div>
        <div className="computers"><Computers /></div>
      </div >
      </div >
    )
  }
}








export default App;
