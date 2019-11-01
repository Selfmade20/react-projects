import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 10,
            timerMinute: 80
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
                    <button>Start</button>
                    <button>Pause</button>
                    <button>Reset</button>
                </section>
            </section>
        )
    }
}

export default Timer;