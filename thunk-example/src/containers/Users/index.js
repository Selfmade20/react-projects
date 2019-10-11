import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllUsers } from '../../redux/users/thunks'
import { addUser, removeUser } from '../../redux/actions'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUser: "",
      date: new Date().toLocaleDateString(),
    }
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  setValue = (e) => {
    this.setState({ newUser: e.target.value })
  }

  addUser = () => {
    this.props.addUser({ first_name: this.state.newUser })
    this.setState({ newUser: '' })
  }

  render() {
    const { users } = this.props
    return <div>
      <h1>Users</h1>
      {users.map(u => <div>{this.state.date} <strong>{u["first_name"]}</strong>
        <button onClick={() => this.props.removeUser(u["first_name"])}
          style={{ margin: '5px' }}> Remove User</button>
      </div>)}
      <input placeholder="Enter user here" style={{ margin: '1px' }} type="text" onChange={this.setValue} value={this.state.newUser} />
      <button onClick={this.addUser}>Add User</button>
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