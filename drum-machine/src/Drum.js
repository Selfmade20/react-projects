import React from 'react';
import '/.App.css';
import { exportDefaultSpecifier } from '@babel/types';

const DRUM_PAD_ELEMENTS = [
    {id: 'Q', text: 'Q', url: 'https://www.soundjay.com/button/button-1.mp3'},
    {id: 'W', text: 'W', url: 'https://www.soundjay.com/button/button-4.mp3'},
    {id: 'E', text: 'E', url: 'https://www.soundjay.com/button/button-7.mp3'},
    {id: 'A', text: 'A', url: 'https://www.soundjay.com/button/button-10.mp3'},
    {id: 'S', text: 'S', url: 'https://www.soundjay.com/button/button-14.mp3'},
    {id: 'D', text: 'D', url: 'https://www.soundjay.com/button/button-27.mp3'},
    {id: 'Z', text: 'Z', url: 'https://www.soundjay.com/button/button-35.mp3'},
    {id: 'X', text: 'X', url: 'https://www.soundjay.com/button/button-45.mp3'},
    {id: 'C', text: 'C', url: 'https://www.soundjay.com/button/button-47.mp3'}
  ];
  
  class DrumPadElement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isActive: false
      }
      
      this.keyPressHandler = this.keyPressHandler.bind(this);
      this.playDrum = this.playDrum.bind(this);
    }
  
    componentDidMount() {
      document.addEventListener('keydown', this.keyPressHandler);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.keyPressHandler);
    }
  
    keyPressHandler(event) {
      if(event.keyCode === this.props.id.charCodeAt(0)){
        this.playDrum();
      }
    }
  
    playDrum() {
      this.setState({ isActive: true });
      setTimeout(() => {
        this.setState({ isActive: false });
      }, 100);
  
      document.getElementById(this.props.id).currentTime = 0;
      document.getElementById(this.props.id).play();
      
      this.props.onTrigger(this.props.index);
    }
  
    render () {
      return (
        <div id={"drum-pad-" + this.props.id}
          className={this.state.isActive ? "drum-pad active": "drum-pad"}
          onClick={this.playDrum} >
          {this.props.id}
          <audio id={this.props.id} src={this.props.url} className="clip" />
        </div>
      );
    }
  }
  
  class DrumMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        displayText: 'Click to play'
      };
  
      this.drumPadTriggered = this.drumPadTriggered.bind(this);
    }
  
    drumPadTriggered(index) {
      this.setState({
        displayText: 'DRUM : ' + DRUM_PAD_ELEMENTS[index].text
      });
    }
  
    render () {
      let drumPadElementsList = DRUM_PAD_ELEMENTS.map((drumElement, index) => {
        return (<DrumPadElement key={index}
          index={index}
          id={drumElement.id}
          url={drumElement.url}
          onTrigger={this.drumPadTriggered} />);
      });
  
      return (
        <div id="drum-machine">
  
          <div id="display">{this.state.displayText}</div>
  
          {drumPadElementsList}
  
        </div>
      )
    }
  }
  
  React.render(<DrumMachine />, document.getElementById('app'));