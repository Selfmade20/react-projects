import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor() {
        super();

        this.state = {
            result: "",
            previousNumber: "",
            currentNumber: "",
            operator: ""
        }
    }

    onClick = button => {

        if (button === "=") {
            this.calculate()
        }

        else if (button === "AC") {
            this.reset()
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


    add = () => {
        this.state.previousNumber = this.state.result;
        this.setState({result: ""});
        this.state.operator = "plus"
    }

    evaluate = () => {
        this.state.currentNumber = this.state.result;
        if(this.state.operator ==  "plus"){
            input: parseInt(this.state.previousNumber) + 
            parseInt(this.state.currentNumber)
        }}
    }

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1 style={{fontFamily: 'Verdana'}}>Simple Calculator</h1>
                    <ResultComponent result={this.state.result} />
                    <KeyPadComponent onClick={this.onClick} />
                    <button name="plus" onClick={this.add}>+</button>
                    <button name="=" onClick={this.evaluate}>=</button>

                </div>
            </div>
        );
    }
}

export default App;
