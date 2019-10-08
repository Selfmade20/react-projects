import React from 'react';
import ToggleSound from '../components/ToggleSound';
import PowerButton from '../components/PowerButton';
import Display from '../components/Display';

const Controls = (props) => {
  return (
    <ul className="controls">
      <ToggleSound toggled={props.toggled} toggleSetButtonClick={props.toggleSetButtonClick} powerOn={props.powerOn}/>
      <PowerButton powerOn={props.powerOn} powerButtonClick={props.powerButtonClick}/>
      <Display display={props.display}/>
      <input type="range" className="volume-slider" max="100" min="0" step="1" onChange={(e) => {
        props.changeVolume(e.target.value)
      }}/>
    </ul>
  );
};

export default Controls;