import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComputer, removeComputer } from '../../redux/actions'


class Computer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newComputer: "",
      isToggle: false,
      date: new Date().toLocaleDateString(),
    }
  }

  setValue = (e) => {
    this.setState({ newComputer: e.target.value })
  }

  addComputer(computer) {
    const { computers } = this.props;

    for (var i in computers) {
      if (computers[i].name == computer) {
        alert("Match found")
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
      {computers.map(c => <div>
        <div><h3>Name:</h3> 
        </div>
        <div style={{margin: '1rem'}}>{c.name}</div>
        <h4>Date:</h4> {this.state.date}
        <div>
        </div>
        <div>
          <button onClick={() => this.props.removeComputer(c.name)} 
          style={{ backgroundColor: '#4CAF50', color: 'white'}}> Remove Computer</button>
        </div>
      </div>)}
      <input placeholder="Enter computer here" type="text" onChange={this.setValue} value={this.state.newComputer} />
      <button onClick={() => this.addComputer(this.state.newComputer)} style={{ margin: "5px" }}>Add Computer</button>
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