import React from 'react';
import BreakInterval from './Components/BreakInterval';
import SessionLength from './Components/SessionLength';
import Timer from './Components/Timer'
import './App.css';


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
    this.onToggleInterval = this.onToggleInterval.bind(this)
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
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
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1
      }
    })
  }

  onUpdateTimerMinute() {
    this.setState(prevState => {
      return {
        timerMinute: prevState.timerMinute - 1
      }
    })
  }

  onToggleInterval(isSession) {
    if (isSession) {
      this.setState({
        timerMinute: this.state.timerMinute - 1
      })
    } else {
      this.setState({
        timerMinute: this.state.breakLength
      })
    }
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
          breakTimer={this.state.breakLength}
          onUpdateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.state.onToggleInterval}
          />
      </main>
    );
  }
}

export default App;
