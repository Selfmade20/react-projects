import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getMessages } from '../redux/posts/thunk'
import { NavLink } from 'react-router-dom'


class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latestMessage: ""
        }
    }

    postMessage = () => {
        this.props.getMessages()
    }



    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}


export default Posts