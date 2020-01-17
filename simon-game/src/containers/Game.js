import React, { Component } from 'react';

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
    if(this.state.isStarted) {
        this.stop()
    }else {
        this.setState({
            isStarted: true
        }, this.countUp)
    }
}

countUp = () => {
    if(this.state.isStarted){
        this.setState({
            count: this.state.count + 1
        }, this.start)
    }
}


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Game;