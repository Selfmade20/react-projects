import React from 'react';
import "../index.css";
import { Game } from '../containers/Game';

function Main(props) {
    return (
        <div className="container">
            <div className="text-center header">
                <h1 className="font-primary">SIMON GAME</h1>
            </div>
            <Game />
        </div>
    )
}

export default Main;