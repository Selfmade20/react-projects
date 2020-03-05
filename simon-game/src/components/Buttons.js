import React from 'react';
import { Button } from 'react-bootstrap'
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


function Buttons(props) {


    const tooltip = (
        <Tooltip id="tooltip">{props.isStrict ? "Strict mode is turned on" : "Strict mode is turned off"}</Tooltip>
    );

    const pads = [
        {
            id: 0,
            color: "red",
            sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        }, {
            id: 1,
            color: "yellow",
            sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        }, {
            id: 2,
            color: "blue",
            sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
        }, {
            id: 3,
            color: "green",
            sound: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
        }
    ]



    return (
        <div className="text-center button-panel">
            <div className="header">SIMON GAME</div>
            <div className="board-buttons">
                <button style=
                    {{ backgroundColor: "yellow", width: 250, height: 150 }} />
                <button style=
                    {{ backgroundColor: "blue", width: 250, height: 150 }} />
            </div>
            <div className="board-buttons">
                <button style={{ backgroundColor: "red", width: 250, height: 150 }} />
                <button style={{ backgroundColor: "green", width: 250, height: 150 }} />
            </div>
            <Button
                bsStyle="primary"

                className="button-panel-item"
                onClick={props.onStart}>
                {props.isStarted ? 'STOP' : 'START'}
            </Button>
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


export default Buttons;
