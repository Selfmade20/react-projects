import React from 'react'


class Logic extends React.Component {
    constructor() {
        super();

        this.state = {
            result: ''
        }
    }

    onClick = button => {

        if (button === '=') {
            this.calculate()
        }
        else if (button === "C") {
            this.reset()
        }
        else if (button === "CE") {
            this.backspace()
        }
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }

        else {
            checkResult = this.state.result
        }

    }


    reset = () => {
        this.setState({
            result: ''
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }

    render() {
        return (
            <div>
                <div className='calculator-body'>
                    <h1>Simple Calculator</h1>
                </div>
            </div>
        )
    }
}

export default Logic;