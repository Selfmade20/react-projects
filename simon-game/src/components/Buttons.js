import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types';
import  Tooltip  from 'react-bootstrap/Tooltip';
import  OverlayTrigger  from 'react-bootstrap/OverlayTrigger';

function Buttons(props) {

    const tooltip = (
        <Tooltip id="tooltip">{props.isStrict ? "Strict mode is turned on" : "Strict mode is turned off"}</Tooltip>
    );

    return (
        <div className="text-center button-panel">
            <Button
                bsStyle="primary"
                className="button-panel-item"
                onClick={props.onStart}>
                {props.isStarted ? 'STOP' : 'START'}
            </Button>
            {/* <Label className="button-panel-item">Count: {props.count}</Label> */}
            <OverlayTrigger placement="bottom" overlay={tooltip}>
                <Button
                    bsStyle={props.isStrict ? "success" : "danger"}
                    className="button-panel-item"
                    onClick={props.onStrictToggle}
                    disabled={false}>
                    STRICT
          </Button>
            </OverlayTrigger>
        </div>
    )
}

Buttons.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    isStrict: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    onStrictToggle: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired
}

 export default Buttons;
