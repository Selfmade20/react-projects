import React from 'react';
import BreakInterval from './Components/BreakInterval';
import SessionLength from './Components/SessionLength';
import Timer from './Components/Timer'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

      this.state = {
        breakLength: 20,
        sessionLength: 2,
        
      }
    }

render(){
  return (
    <main>
      <h1>Pomodoro Clock</h1>
      <section className="interval-section-container">
      <BreakInterval breakInterval={this.state.breakLength}/>
      <SessionLength sessionLength={this.state.sessionLength}/>
      </section>
      <Timer timerMinute={this.state.timerMinute} />
    </main>
  );
}
}

export default App;
