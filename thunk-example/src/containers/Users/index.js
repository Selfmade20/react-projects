import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser, getAllUsers, removeUser } from '../../redux/actions/users'
import './users.css'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: "",
    }
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  setValue = (e) => {
    this.setState({ newUser: e.target.value })
  }

  addUser = () => {
    const { users } = this.props;

    for (var i in users) {
      if (users[i]["username"] === this.state.newUser) {
        alert("User already exists")
        return
      }
    }
    const username = this.state.newUser
    this.props.addUser(username)
    this.setState({ newUser: '' })
  }

  render() {
    const { users } = this.props
    return <div className="items">
      <h1 className="header">Users</h1>
      <div className="input-container">
        <h7 className="name">Name:</h7>
        <input className="input" placeholder="Enter user here" type="text" onChange={this.setValue} value={this.state.newUser} />
        <button className="add_user" onClick={() => this.addUser()}>
          <i className="fa fa-refresh"> Add User</i>
        </button>
      </div>
      <div className="data">
        <h1 className="header">Users</h1>
        <label><strong>Names</strong></label>
        {users.map(u => <div className="user-names"><li> {u.username}</li>
          <button onClick={() => this.props.removeUser(u.id)}>Remove User</button>
        </div>)}
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
})

const mapDispatchToProps = dispatch => ({
  addUser: (user) => {
    dispatch(addUser(user))
  },
  removeUser: (user) => {
    dispatch(removeUser(user))
  },
  getAllUsers: () => {
    dispatch(getAllUsers())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)