import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts, addPost } from '../redux/Messages/thunks';
import Post from './Post';
import { Data } from '../styles'

class Messages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newMessage: ""
        }
    }

    componentDidMount() {
        this.timer = setInterval(() =>
            this.props.getPosts(), 5000
        )

    }

    setValue = (event) => {
        this.setState({
            newMessage: event.target.value
        })
    }

   
    render() {
        const { posts } = this.props
        return (
            <div>
                <h1 className="header">Messages</h1>
                <Post />
                <Data>
                    {posts.map(message => (
                        <div key={message["uuid"]}>
                            <ul>
                                <div className="name">
                                    <label>Name:</label> {message["name"]}
                                </div>
                                <div className="message">
                                    <label>Message:</label> {message["message"]}
                                </div>
                            </ul>
                        </div>
                    ))}
                </Data>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.listOfPosts.listOfPosts
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => {
        dispatch(getPosts())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages)