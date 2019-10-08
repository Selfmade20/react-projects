import React from 'react';

const ToggleSound = (props) => {
  return (
    <li className="toggle-sound control-button" onClick={() => {
      if (props.powerOn) {
        props.toggleSetButtonClick();
      }
    }
  }>
      {props.toggled === true ? "CHANGE TO HEATER" : "CHANGE TO PIANO"}
    </li>
  );
};

export default ToggleSound;