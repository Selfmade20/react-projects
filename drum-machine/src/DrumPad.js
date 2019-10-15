import React from 'react';
import './DrumPad'

class DrumPad extends React.Component {

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown)
  }

  handleKeydown = e => {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }

  playSound = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);

    let target = document.getElementById(this.props.id);
    target.classList.add('drum-pad-active');
    setTimeout( () => {
      target.classList.remove('drum-pad-active');
    }, 100);

  }

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.id}
        onClick={this.playSound}
      >
        <h2>{this.props.letter}</h2>
      
        <audio 
          className="clip"
          id={this.props.letter
          }
          src={this.props.src}
          ref={ref => (this.audio = ref)}
          keyCode={this.props.keyCode}
        />

      </div>
    )
  }
}

export default DrumPad;