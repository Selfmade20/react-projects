import React, {  Component } from 'react';
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
      <strong style={{ margin: '2%' }}>Name:</strong><input placeholder="Enter computer here" type="text" onChange={this.setValue} value={this.state.newComputer} />
      <button onClick={() => this.addComputer(this.state.newComputer)} style={{ margin: "5px", backgroundColor: 'orange', color: 'black' }}>Add Computer</button>
      {computers.map(c => <div>
        <div><h3>Name:<strong style={{padding:'3%'}}>{c.name}</strong></h3>   <h3>Date:<strong style={{padding: '3%'}}>{c.date}</strong></h3></div>
        <div style={{ padding: '3%' }}> </div>

        <button onClick={() => this.props.removeComputer(c.name)}
          style={{ backgroundColor: 'purple', color: 'white' }}> Remove Computer</button>
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