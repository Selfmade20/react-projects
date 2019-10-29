import React from 'react'


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: "30",
            initial: 30,
            isToggle: false
        }

    }

    resetTimer = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            count: e.target.value
        })
    }

    subTime = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    startCount = () => {
        this.setState({
            isToggle: true
        })
        let interval = setInterval(() => {
            if (this.state.count <= 30) {
                this.subTime();
                return 0;
            }
        }, 10000)
    }

    render() {
        return (
            <div>
                <h1>Pomodoro Timer</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.startCount}>Start</button>
                <button>Pause</button>
                <button>Reset</button>
            </div>
        )
    }

}

export default Timer;