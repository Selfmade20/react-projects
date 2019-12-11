import React, { Component } from 'react';
import { addPost } from '../redux/Messages/thunks'
import { connect } from 'react-redux'
import {Wrapper , Button, Input} from "../styles"

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMessage: ""
        }
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
    }

    render() {
     
        return (
                <Wrapper>
                    <div className="label">Message</div>
                    <Input onChange={this.setValue} value={this.state.newMessage}></Input>
                    <Button onClick={this.addMessage}>Post</Button>
                </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.listOfPosts.listOfPosts,
    name: state.userName.userName
})

const mapDispatchToProps = dispatch => ({
    addPost: (message, name) => {
        dispatch(addPost(message, name))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Post);