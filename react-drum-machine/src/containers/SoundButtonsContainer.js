import React from "react";
import SoundButton from "../components/SoundButton";

const SoundButtonsContainer = (props) => {
  //determines which soundset to us
  let soundSet = !props.toggled ? props.sounds.heaterKit : props.sounds.smoothPianoKit;
  //display the button set
  const soundButtons = soundSet.map(a => {
    return <SoundButton soundName={a.name} key={a.keyCode} soundSrc={a.src} soundKeyChar={a.keyChar} soundKeyCode={a.keyCode} changeDisplay={props.changeDisplay} powerOn={props.powerOn} playSound={props.playSound}/>;
  });
  return <ul className="sound-buttons-container">{soundButtons}</ul>;
};

export default SoundButtonsContainer;
