import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComputer, removeComputer } from '../../redux/computers/thunks'


class Computer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newComputer: "",
      removed: null
    }
  }


  setValue = (e) => {
    this.setState({ newComputer: e.target.value })
  }

  removeValue = (e) => {
    this.setState({ removed: e.target.value })
  }

  render() {
    const { computers } = this.props
    return <div>
      <h1>Computers</h1>
      {computers.map(u => <div>{u.name}</div>)}
      <input type="text" onChange={this.setValue} value={this.state.newComputer} />
      <button onClick={() => this.props.addComputer(this.state.newComputer)}>Add Computer</button>
      <button onClick={() => this.props.removeComputer(this.state.removed)}>Remove Computer</button>
    </div>
  }
}

const mapStateToProps = (state) => ({
  computers: state.computers.computers,
})

const mapDispatchToProps = dispatch => ({
  addComputer: (computers) => {
    dispatch(addComputer(computers))
  },
  removeComputer: (computers) => {
    dispatch(removeComputer(computers))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Computer)