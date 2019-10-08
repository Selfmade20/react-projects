import React from 'react';

const PowerButton = (props) => {

  return (
    <li className="power-button control-button" onClick={props.powerButtonClick}>
      {props.powerOn === true ? "TURN OFF" : "TURN ON"}
    </li>
  );
};

export default PowerButton;