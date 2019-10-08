import React from 'react';

const Display = (props) => {
  return (
    <li className="display control-button">
      {props.display}
    </li>
  );
};

export default Display;