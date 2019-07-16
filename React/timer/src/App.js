import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 60
    }
  } 
  render() {
    const { count } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>COUNTDOWN TIMER</h2>
          <h1>{count}</h1>
          <h3>Current  Countdown  </h3>
        </div>
        <p className="App-intro"></p>
      </div>
    );
  }
  //setInterval
  //clearInterval
  componentDidMount(){
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)
  }
}

export default App;
