import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { enterName } from '../redux/actions/user actions/index'
import { NavLink } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }



    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    addName = (name) => {
        this.props.enterName(name);
        this.setState({
            ...this.state,
            name: ""
        })
    }

    render() {

        const Styles = styled.div`
        .login {
            margin: 20rem,

        }
        .button {
            font-size: 20px;
        }
    
        `

        return (
            <Styles>
                <label>Name</label>
                <input
                    type="text"
                    className="login"
                    name="name"
                    placeholder="Enter your name below"
                    onChange={this.handleChange}
                />

                <button className="button" onClick={() => this.addName}></button>

            </Styles>

        )
    }

}

const mapStateToProps = state => ({
    userName: state.login.userName
});

const mapDispatchToProps = dispatch => {
    return {
        enterName: name => {
            dispatch(enterName(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);