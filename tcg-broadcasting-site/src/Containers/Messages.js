import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllData } from '../redux/users/thunks';
import { enterMessage } from '../redux/actions/user actions'


class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: ""
        }
    }

    componentDidMount() {
        this.props.getAllData()
        console.log("Hello", getAllData)
    }

    setValue = (event) => {
        this.setState({ newMessage: event.target.value })
    }

    enterMessage = () => {
        const { messages } = this.props;

        for (var i in messages) {
            if (messages[i]["message"] === this.state.newMessage) {
                alert("Tweet already exists")
                return
            }
        }
        this.props.enterMessage({ message: this.state.newMessage })
        this.setState({ newUser: "" })
    }

    render() {
        const { message } = this.props
        console.log("Yebow", message)
        return (
            <div>
                <h1>Messages</h1>
                <label>Message</label>
                <input placeholder="Enter message here" onChange={this.setValue} value={this.state.newMessage} />
                <button onClick={() => this.enterMessage()}>Post</button>
                {this.props.message.map(message => message["message"])}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userData: state.userData
})

const mapDispatchToProps = dispatch => ({
    getAllData: () => {
        dispatch(getAllData())
    },
    enterMessage: (message) => {
        dispatch(enterMessage(message))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)