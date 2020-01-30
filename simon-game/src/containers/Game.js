import React, { Component } from 'react';
import Board from '../components/Board';
import Buttons from '../components/Buttons';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isStarted: false,
            isStrict: false,
            count: 0,
            activeItems: [false, false, false, false],
            isEnabled: false,
            isBlinking: false
        }
    }

    handleStrictToggle = () => {
        this.setState({
            isStrict: !this.state.isStrict
        })
    }

    handleStart = () => {
        if (this.state.isStarted) {
            this.stop()
        } else {
            this.setState({
                isStarted: true
            }, this.countUp)
        }
    }

    countUp = () => {
        if (this.state.isStarted) {
            this.setState({
                count: this.state.count + 1
            }, this.start)
        }
    }
    stop =() => {
        console.log("yebow")
    } 


    render() {
        return (
            <div>
                <Buttons
                    isStarted={this.state.isStarted}
                    isStrict={this.state.isStrict}
                    count={this.state.count}
                    onStrictToggle={this.handleStrictToggle}
                    onStart={this.handleStart}
                />

                <Board
                    onMouseDown={this.handleMouseDown}
                    activeItems={this.state.activeItems}
                    isEnabled={this.state.isEnabled}
                    isBlinking={this.state.isBlinking} />
            </div>
        );
    }
}

export default Game;