import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DrumPad from './DrumPad';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      display: "click or press key",
    }
  }

  handleDisplay = display => this.setState({ display });



  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
          {data.map(d => (
            <DrumPad
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              keyCode={d.keyCode}
              handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
      </div>
    )
  }
}

const data = [
  {
    keyCode: 81,
    letter: "Q",
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    letter: "W",
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    letter: "E",
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    letter: "A",
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    letter: "S",
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    letter: "D",
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    letter: "Z",
    id: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    letter: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    letter: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
