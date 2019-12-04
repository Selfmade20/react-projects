import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllData } from '../redux/users/thunks';
import { enterName } from '../redux/actions/user actions';
import { styled } from 'styled-components';


const Styles = styled.div`
.wrapper {
    margin: 20px;
    font-family: sans serif;
    text-align: left;
    color: white;
}

.submit-button {
    font-size: 16px;
    margin-top: 10px;
    border-radius: 4px;
    font-family: Simplifica
}

input {
    display: block;
    width: 40%;
}  

.description {
    font-size: 20px
    font-family: Simplifica
    margin-top: 2%
}
.label{
    font-family: Simplifica
    font-size: 20px
}

`


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: "",
        }
    }

    componentDidMount() {
        this.props.getAllData()
    }

    setValue = (event) => {
        this.setState({ newUser: event.target.value })
    }

    enterName = () => {
        const { users } = this.props;

        for (var i in users) {
            if (users[i]["name"] === this.state.newUser) {
                alert("User already exists")
                return
            }
        }
        this.props.enterName({ name: this.state.newUser })
        this.setState({ newUser: "" })
    }


    render() {
        return (
            <Styles>
                <div className="wrapper">
                    <h1 className="header">WELCOME TO</h1>
                    <h1 className="header">THE CODING GROUND</h1>
                    <p className="description">Please enter your name to proceed</p>
                    <form className="survey-form">
                        <div className="form-group">
                            <label className="label" for="name">Name</label>
                            <input
                                type="text"
                                name="text_name"
                                className="form-control"
                                placeholder="Enter your name"
                                required
                            />
                            <button 
                            type="submit" onClick={() => this.enterName()} className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>
            </Styles>
        );
    }
}

export default logIn;