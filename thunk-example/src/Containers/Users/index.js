import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getAllUsers } from '../../redux/users/thunks'
import { addUser, removeUser } from '../../redux/actions/users actions'

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
    return <div>
      <h1>User</h1>
      <strong>Name:</strong><input placeholder="Enter user here" style={{ margin: '1%', padding: '1%' }} type="text" onChange={this.setValue} value={this.state.newUser} />
      <button onClick={() => this.addUser()} style={{ backgroundColor: 'orange', color: 'black', justifyContent: 'space-around' }}>Add User</button>
      {users.map(u => <div style={{ padding: '3%' }}> <strong>Name: </strong>{u["first_name"]}
        <div className='remove-user-button'>
          <button onClick={() => this.props.removeUser(u.id)}
            style={{ margin: '4%', backgroundColor: 'purple', color: 'white', }}> Remove User</button>
        </div>
      </div>)}
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