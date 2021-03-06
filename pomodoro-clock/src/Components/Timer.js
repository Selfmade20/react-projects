import React from 'react';


class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            timerMinute: 25,
            intervalId: 0
        }
        this.play = this.play.bind(this)
        this.decreaseTimer = this.decreaseTimer.bind(this)
    }

    play() {
        let intervalId = setInterval(this.decreaseTimer, 1000)
        this.setState({
            intervalId: intervalId
        })
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                this.updateTimerMinute()
                this.setState({
                    timerSecond: 59
                })
                break;
            default:
                console.log("play")
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1
                    }
                })
                break;
        }
    }

    render() {
        return (
            <section>
                <section className="timer-container">
                    <h4>{this.state.isSession === true ? 'Session' : 'Break'}</h4>
                    <span className="timer">{this.state.timerMinute}</span>
                    <span className="timer">:</span>
                    <span className="timer">{this.state.timerSecond === 0 ? "00" :
                        this.state.timerMinute < 10 ? "0" +
                            this.state.timerSecond : this.state.timerSecond}</span>
                </section>
                <section className="timer-actions">
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.pause}>Pause</button>
                    <button onClick={this.reset}>Reset</button>
                </section>
            </section>
        )
    }
}

export default Timer;