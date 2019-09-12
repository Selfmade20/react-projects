import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllUsers, addUser } from '../../redux/users/thunks'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = { newUser: "" }
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  setValue = (e) => {
    this.setState({ newUser: e.target.value })
  }

  addUser = () => {
    this.props.addUser({ first_name: this.state.newUser })
    this.setState({ newUser: ''})
  }

  render() {
    const { users } = this.props
    return <div>
      <h1>Users</h1>
      { users.map(u => <div>{ u["first_name"] }</div>) }
      <input type="text" onChange={this.setValue} value={this.state.newUser} />
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)