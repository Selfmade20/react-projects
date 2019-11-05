import React from 'react';
import BreakInterval from './Components/BreakInterval';
import SessionLength from './Components/SessionLength';
import Timer from './Components/Timer'
import './App.css';
import { timingSafeEqual } from 'crypto';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 20,
      sessionLength: 2,

    }
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this)
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this)
  }


  onIncreaseBreakLength = () => {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    })
  }
  onDecreaseBreakLength = () => {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    })
  }

  onIncreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1
      }
    })
  }

  onDecreaseSessionLength() {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1
      }
    })
  }


  render() {
    return (
      <main>
        <h1>Pomodoro Clock</h1>
        <section className="interval-section-container">
          <BreakInterval
            breakInterval={this.state.breakLength}
            increaseBreak={this.onIncreaseBreakLength}
            decreaseBreak={this.onDecreaseBreakLength}
          />
          <SessionLength
            sessionLength={this.state.sessionLength}
            increaseSession={this.onIncreaseSessionLength}
            decreaseSession={this.onDecreaseSessionLength}
          />
        </section>
        <Timer
          timerMinute={this.state.timerMinute}

        />
      </main>
    );
  }
}

export default App;
