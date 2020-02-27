import React, { Component } from 'react';
import { connect } from 'react-redux';
import './computers.css';
import { addComputer, getAllComputers, removeComputer } from '../../redux/actions/computer';
import moment from 'moment';


class Computer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newComputer: "",
      isToggle: false,
      loading: false,
    }
  }

  setValue = (e) => {
    this.setState({ newComputer: e.target.value })
  }


  componentDidMount() {
    this.props.getAllComputers()
  }

  addComputer(computer) {
    const { computers } = this.props;

    for (var i in computers) {
      if (computers[i].name === computer.trim()) {
        alert("Computer already exists")
        return
      }
    }

    const name = this.state.newComputer;
    this.setState({ loading: true });
    this.props.addComputer(name)
    this.setState({ loading: false });
    this.setState({ newComputer: '' });

  }

  render() {
    const { computers } = this.props
    const { loading } = this.state

    return <div>
      <h1 className="header">Computers</h1>
      {/* <h4 className="header">Name:</h4> */}
      <div className="inputs-container">
        <label>Name :</label>
        <input placeholder="Enter computer here" type="text" onChange={this.setValue} value={this.state.newComputer} />
        <button onClick={() => this.addComputer(this.state.newComputer)} disabled={loading}>
          {loading && <i className="fa fa-refresh fa-spin"></i>}
          Add Computer
        </button>
      </div>
      {computers.map(c =>
        <div className="data">
          <h5>Name: {c.name}</h5>
          <h5>Date: {moment(c.date).format("DD.MM.YYYY")}</h5>
          <button onClick={() => this.props.removeComputer(c._id)}> Remove Computer</button>
          <div>
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
  },
  getAllComputers: () => {
    dispatch(getAllComputers())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Computer)