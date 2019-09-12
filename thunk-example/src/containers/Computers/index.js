import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComputer } from '../../redux/computers/thunks'

class Computer extends Component {
  constructor(props) {
    super(props)
    this.state = { newComputer: "" }
  }

  componentDidMount() {
    this.props.addComputer()
  }

  setValue = (e) => {
    this.setState({ newComputer: e.target.value })
  }

  addComputer = () => {
    this.props.addComputer({ name: this.state.newComputer })
    this.setState({ newComputer: ''})
  }

  render() {
      const { computers } = this.props
      console.log(computers)
    return <div>
      <h1>Computers</h1>
      { computers.map(u => <div>{ u["first_name"] }</div>) }
      <input type="text" onChange={this.setValue} value={this.state.newComputer} />
      <button onClick={this.addComputer}>Add Computer</button>
    </div>
  }
}

const mapStateToProps = (state) => ({
  computers: state.computers.computers,
})

const mapDispatchToProps = dispatch => ({
  addComputer: () => {
    dispatch(addComputer)
  },
  addComputer: (computer) => {
    dispatch(addComputer(computer))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Computer)