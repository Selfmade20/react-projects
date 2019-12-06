import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPosts, postAdded } from '../redux/users/thunks';
import { enterMessage } from '../redux/actions/user actions'


class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPost: ""
        }
    }

    componentDidMount() {
        this.props.showPosts()
       
    }

    setValue = (event) => {
        this.setState({ newPost: event.target.value })
    }

    enterMessage = () => {
    this.props.postAdded({
        message: this.state.newPost,

    })
    this.setState({newPost: ""})
    this.props.showPosts()
    }

    render() {
        return (
            <div>
                <h1>Messages</h1>
                <label>Message</label>
                <input placeholder="Enter message here" onChange={this.setValue} value={this.state.newMessage} />
                <button onClick={() => this.enterMessage()}>Post</button>
                <div className="message">
                {/* {this.props.message.map(message => {message["message"]})} */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  messages: state.messages.userData
})

const mapDispatchToProps = dispatch => ({
    showPosts: () => {
        dispatch(showPosts())
    },
    postAdded: (message) => {
        dispatch(postAdded(message))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)