import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, addPost } from '../redux/messages/thunks';
import { Data, Wrapper, Input, Button } from '../styles'
import { NavLink } from 'react-router-dom';

class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: ""
        }
    }

    componentDidMount() {
        this.time = setInterval(() =>
            this.props.getPosts(), 4000
        )

    }

    setValue = (event) => {
        this.setState({
            newMessage: event.target.value
        })
    }

    addMessage = () => {
        this.props.addPost({
            message: this.state.newMessage,
            name: this.props.name
        })
        this.setState({ newMessage: "" })
        this.props.getPosts()
    }


    render() {
        const { posts } = this.props
        return (
            <div>
                <h1 className="header">Messages</h1>
                <NavLink to={`Home`}>
                    <Button>Back</Button>
                </NavLink>
                <Wrapper>
                    <div className="label">Message:</div>
                    <Input placeholder="Type your message here" onChange={this.setValue} value={this.state.newMessage}></Input>
                    <Button onClick={this.addMessage}>Post</Button>
                </Wrapper>
                <Data>
                    {posts.map(message => (
                        <div key={message["uuid"]}>
                            <li>
                                <ul>
                                    <div className="name">
                                        <label>Name:</label> {message["name"]}
                                    </div>
                                    <div className="message">
                                        <label>Message:</label> {message["message"]}
                                    </div>
                                </ul>
                            </li>
                        </div>
                    ))}
                </Data>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.listOfPosts.listOfPosts,
    name: state.userName.userName
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => {
        dispatch(getPosts())
    },
    addPost: (message) => {
        dispatch(addPost(message));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)