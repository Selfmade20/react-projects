import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, addPost } from '../redux/messages/thunks';
import { Data, Wrapper, Input, Button } from '../styles'

class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: ""
        }
    }

    componentWillMount() {
        this.props.getPosts()
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
                <h2 className="User-icon"><span class="glyphicon glyphicon-user"></span> {this.props.name}</h2>
                <h1 className="header">Messages</h1>
                <a href="http://localhost:3000">
                    <Button>Back</Button>
                </a >
                <Wrapper>
                    <Input placeholder="Type your message here" onChange={this.setValue} value={this.state.newMessage}></Input>
                    <Button onClick={this.addMessage}>Post</Button>
                </Wrapper>
                <Data>
                    {posts.map(message => (
                        <div key={message["uuid"]}>
                            <div className="name">
                                <strong>Name:</strong> {message["name"]}
                            </div>
                            <div className="message">
                                <strong>Message:</strong> {message["message"]}
                            </div>
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