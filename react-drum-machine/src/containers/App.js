import React, { Component } from "react";
import SoundButtonsContainer from "./SoundButtonsContainer";
import Controls from "./Controls";
import SoundFile from "./SoundFile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleSet: true,
      powerOn: true,
      display: "VOLUME: 50",
      volume: 50,
      soundSet: {
        heaterKit: [
          {
            name: "HEATER-1",
            keyCode: 81,
            keyChar: "Q",
            src: SoundFile.Heater1
          },
          {
            name: "HEATER-2",
            keyCode: 87,
            keyChar: "W",
            src: SoundFile.Heater2
          },
          {
            name: "HEATER-3",
            keyCode: 69,
            keyChar: "E",
            src: SoundFile.Heater3
          },
          {
            name: "HEATER-4",
            keyCode: 65,
            keyChar: "A",
            src: SoundFile.Heater4
          },
          {
            name: "CLAP",
            keyCode: 83,
            keyChar: "S",
            src: SoundFile.Heater5
          },
          {
            name: "OPEN-HH",
            keyCode: 68,
            keyChar: "D",
            src: SoundFile.Heater6
          },
          {
            name: "KICK-N'-HAT",
            keyCode: 90,
            keyChar: "Z",
            src: SoundFile.Heater7
          },
          {
            name: "KICK",
            keyCode: 88,
            keyChar: "X",
            src: SoundFile.Heater8
          },
          {
            name: "CLOSED-HH",
            keyCode: 67,
            keyChar: "C",
            src: SoundFile.Heater9
          }
        ],
        smoothPianoKit: [
          {
            name: "CHORD_1",
            keyCode: 81,
            keyChar: "Q",
            src: SoundFile.Smooth1
          },
          {
            name: "CHORD_2",
            keyCode: 87,
            keyChar: "W",
            src: SoundFile.Smooth2
          },
          {
            name: "CHORD_3",
            keyCode: 69,
            keyChar: "E",
            src: SoundFile.Smooth3
          },
          {
            name: "SHAKER",
            keyCode: 65,
            keyChar: "A",
            src: SoundFile.Smooth4
          },
          {
            name: "OPEN-HH",
            keyCode: 83,
            keyChar: "S",
            src: SoundFile.Smooth5
          },
          {
            name: "CLOSED-HH",
            keyCode: 68,
            keyChar: "D",
            src: SoundFile.Smooth6
          },
          {
            name: "PUNCHY-KICK",
            keyCode: 90,
            keyChar: "Z",
            src: SoundFile.Smooth7
          },
          {
            name: "SIDE-STICK",
            keyCode: 88,
            keyChar: "X",
            src: SoundFile.Smooth8
          },
          {
            name: "SNARE",
            keyCode: 67,
            keyChar: "C",
            src: SoundFile.Smooth9
          }
        ]
      }
    };
    //function binding to this
    this.togglePower = this.togglePower.bind(this);
    this.toggleSound = this.toggleSound.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
    this.playSound = this.playSound.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  //turns power on or off
  togglePower() {
    this.setState({
      powerOn: !this.state.powerOn,
      display: `VOLUME: ${this.state.volume}`
    });
  }

  //changes the sound set
  toggleSound() {
    this.setState({toggleSet: !this.state.toggleSet});
    this.state.toggleSet ? this.setState({display: "HEATER"}) : this.setState({display: "PIANO"});
  }

  //changes display when sound button pressed
  changeDisplay(val) {
    this.setState({display: val});
  }

  //changes volume when slider moved
  changeVolume(val) {
    if (val < 2) {
      this.setState({
        volume: 0,
        display: "VOLUME: 0"
      });
    } else {
      this.setState({
        volume: val,
        display: `VOLUME: ${val}`
      });
    }
    const soundButton = document.querySelectorAll(".audio-tag");
    [...soundButton].map(audio => audio.volume = this.state.volume / 100);
    console.log(this.state.volume);
  }

  playSound(id) {
    let sound = document.querySelector(`#${id}`);
    sound.currentTime = 0;
    sound.play()
  }

  render() {
    return (
        <div className="app">
        <h1 className="App-title">REACT DRUM MACHINE</h1>
        <SoundButtonsContainer sounds={this.state.soundSet} toggled={this.state.toggleSet} powerOn={this.state.powerOn} changeDisplay={this.changeDisplay} playSound={this.playSound}/>
        <Controls toggled={this.state.toggleSet} powerOn={this.state.powerOn} display={this.state.display} powerButtonClick={this.togglePower} toggleSetButtonClick={this.toggleSound} changeDisplay={this.changeDisplay} startSlide={this.startSlide} moveSlide={this.moveSlide} stopSlide={this.stopSlide} volume={this.state.volume} changeVolume={this.changeVolume}/>
      </div>
    );
  }
}

export default App;
