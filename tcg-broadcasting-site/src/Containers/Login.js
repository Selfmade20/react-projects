import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterName } from '../redux/Login/actions';
import { NavLink } from 'react-router-dom';



class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: "",
        }
    }

    setValue = (event) => {
        this.setState({ newUser: event.target.value })
    }

    logIn = () => {
        this.props.enterName(this.state.newUser)
        this.setState({
            newUser: ""
        })
    }


    render() {
        return (
            <div className="wrapper">
                <h1 className="header">WELCOME TO</h1>
                <h1 className="header">THE CODING GROUND</h1>
                <p className="description" style={{ color: "white", margin: "7px" }}>Please enter your name to proceed</p>
                <div className="survey-form">
                    <div className="form-group" style={{ margin: "7px" }}>
                        <label className="label" style={{ color: "white" }} for="name">Name</label>
                        <input
                            style={{ width: "40%" }}
                            type="text"
                            name="text_name"
                            value={this.state.newUser}
                            className="form-control"
                            placeholder="Enter your name"
                            onChange={this.setValue}
                        />
                        <NavLink to={`Posts`}>
                            <button type="submit" onClick={() => this.logIn()} className="submit-button">Submit</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userName: state.userName,
})

const mapDispatchToProps = dispatch => ({
    enterName: (name) => {
        dispatch(enterName(name))
    } 
})

export default connect(mapStateToProps , mapDispatchToProps)(Login);