import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPosts, postAdded } from '../redux/Messages/thunks';

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

    render() {
        const {posts} =this.props
        return ( 
            <div>
                <h1>Messages</h1>
                <label>Message</label>
                <div className="message">
                    {posts.map(message => (
                        <div className="messages" key={message["uuid"]}>
                            {message["name"]}
                            {message["message"]}
                        </div>
                    ))}
                </div>

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.listOfPosts.listOfPosts
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