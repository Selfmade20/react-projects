import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enterName } from '../redux/actions/user actions';




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

    logIn = (name) => {
       this.props.enterName(name)
       this.setState({
           name: ""
       })
    }


    render() {
        return (
            <div className="wrapper">
                <h1 className="header">WELCOME TO</h1>
                <h1 className="header">THE CODING GROUND</h1>
                <p className="description" style={{color: "white", margin:"7px"}}>Please enter your name to proceed</p>
                <form className="survey-form">
                    <div className="form-group" style={{margin: "7px"}}>
                        <label className="label" style={{color: "white"}} for="name">Name</label>
                        <input
                            style={{ width: "40%" }}
                            type="text"
                            name="text_name"
                            value={this.name}
                            className="form-control"
                            placeholder="Enter your name"
                            onChange={this.setValue}
                            required
                        />
                        <button
                            type="submit" onClick={() => this.enterName()} className="submit-button">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userData: state.userData,
})

const mapDispatchToProps = dispatch => ({
    enterName: (name) => {
        dispatch(enterName(name))
    }
})

export default connect(mapDispatchToProps, mapStateToProps)(Login);