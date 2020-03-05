import React, { Component } from 'react';
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
        this.currentIndex = 0;
        this.soundArray = [];
        this.setState({
          isStarted: false,
          isStrict: this.state.isStrict,
          count: 0,
          activeItems: [false, false, false, false],
          isEnabled: false,
          isBlinking: false
        })
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

            </div>
        );
    }
}

export default Game;