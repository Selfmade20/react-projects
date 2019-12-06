import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllUsers } from '../../redux/users/thunks'
import { addUser, removeUser } from '../../redux/actions/users actions'
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
      if (users[i]["first_name"] === this.state.newUser) {
        alert("User already exists")
        return
      }
    }
    this.props.addUser({ first_name: this.state.newUser })
    this.setState({ newUser: '' })
  }

  render() {
    const { users } = this.props
    return <div className="items">
      <h7 className="name">Name:</h7>
      <input className="input" placeholder="Enter user here" type="text" onChange={this.setValue} value={this.state.newUser} />
      <button className="add_user" onClick={() => this.addUser()}>Add User</button>
      <div className="data">
        <h1 className="header">Users</h1>
        <label><strong>Names</strong></label>
        {users.map(u => <div> {u["first_name"]} <button onClick={() => this.props.removeUser(u.id)}>Remove User</button>
        </div>)}
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({
  users: state.users.all,
})

const mapDispatchToProps = dispatch => ({
  getAllUsers: () => {
    dispatch(getAllUsers())
  },
  addUser: (user) => {
    dispatch(addUser(user))
  },
  removeUser: (user) => {
    dispatch(removeUser(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)