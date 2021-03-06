import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      count: "0",
      initial: 0,
      date: [],
      time: "",
      isToggle: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.startCount = this.startCount.bind(this);
    this.resetTimer = this.resetTimer.bind(this);

  }

  captureTime() {
    var date = new Date();
    console.log("capture" + date);
    this.setState({ date: [...this.state.date, date] })

  }
  resetTimer = (event) => {
    event.preventDefault();
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      count: event.target.value
    })
  }

  subTime() {
    this.setState({
      count: this.state.count - 1
    });

  }

  startCount() {
    this.setState({
      isToggle: true
    })
    let interval = setInterval(() => {
      if (this.state.count <= 0) {
        this.setState({
          isToggle: false
        })
        this.captureTime();
        clearInterval(interval)
        return 0
      }
      this.subTime();
      return 0;
    }, 1000);

  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>COUNTDOWN TIMER</h2>
          <h1>{this.state.count}</h1>
          <h3>Current Countdown</h3>
          {!this.state.isToggle ? <div className="buttons">
            <input type="value" placeholder="Enter Your Number" onChange={this.handleChange} />
            <button onClick={this.startCount}>Start</button>
          </div> : null}
        </header>
        <div className="Capture">
          <h2>{this.state.date.map((time) => <li>{time.toLocaleString()}</li>)}</h2>
        </div>

      </div>
    );
  }
};





export default App;
