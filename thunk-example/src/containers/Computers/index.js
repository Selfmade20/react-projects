import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComputer, removeComputer } from '../../redux/actions'


class Computer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      newComputer: "",
      isToggleOn: true      
    }
    this.handleClick = this.handleClick.bind(this);
  }


  setValue = (e) => {
    this.setState({ newComputer: e.target.value })
  }
 
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  addComputer(computer){
      const {computers} =  this.props;

      for(var i in computers){
        if(computers[i].name == computer){
          console.log("found match")
          return
        }
      }

    this.props.addComputer(computer)
  }
  
  render() {
    const { computers } = this.props


    return <div>
      <h1>Computers</h1>
      {computers.map(c => <div>{c.name}
        <button  onClick={() => this.props.removeComputer(c.name)} style={{letterSpacing: '5 rem'}}> Remove Computer</button>
      </div>)}
      <input type="text" onChange={this.setValue} value={this.state.newComputer} />
      <button onClick={() => this.addComputer(this.state.newComputer)}>Add Computer</button>
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