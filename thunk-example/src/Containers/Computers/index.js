import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComputer, removeComputer } from '../../redux/actions/computer actions';


class Computer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newComputer: "",
      isToggle: false,
    }
  }

  setValue = (e) => {
    this.setState({ newComputer: e.target.value })
  }

  addComputer(computer) {
    const { computers } = this.props;

    for (var i in computers) {
      if (computers[i].name == computer.trim()) {
        alert("Computer already exists")
        return
      }
    }
    this.props.addComputer(computer)
    this.setState({ newComputer: '' })
  }

  render() {
    const { computers } = this.props

    return <div>
      <h1>Computers</h1>
      <h4>Name:</h4>
      <input placeholder="Enter computer here" type="text" onChange={this.setValue} value={this.state.newComputer} />
      <button onClick={() => this.addComputer(this.state.newComputer)}>Add Computer</button>
      {computers.map(c => 
      <div>
        <h3>Name:{c.name}</h3> 
        <h3>Date:{c.date}</h3>
        <div>
        <button onClick={() => this.props.removeComputer(c.id)}> Remove Computer</button>  
        </div>
      </div>)}

    </div>
  }
}

const mapStateToProps = (state) => ({
  computers: state.computers.computers
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