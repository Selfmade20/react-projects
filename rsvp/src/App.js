import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Form, Label, Button, Input, FormGroup } from 'reactstrap'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      cellNumber: 0,
      rsvp: "",
      dietaryProgramme: ""
    }
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
 }

 handleNameChange = (event) => {
   this.setState({name: event.target.value})
 }

handleNumberChange = (event) => {
  this.setState({cellNumber: event.target.value})
}

  submit = () => {
    
    this.setState({
      name: "",
      email: "",
      cellNumber: '',
    })
    console.log("SUB",this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>RSVP</h1>
        </header>
        <Form>
          <div className='name'>
            <Label>Name:
            <Input type='text' onChange={this.handleNameChange} required></Input>
            </Label>
          </div>
          <div className='email'>
            <Label>Email Address:
            <Input type='email' onChange={this.handleEmailChange} required></Input>
            </Label >
          </div>
          <div className='numbers'>
            <Label>Cell Number:
            <Input type="numbers" onChange={this.handleNumberChange} ></Input>
            </Label>
          </div>
          <div className='rsvp'>
            <Label>RSVP:</Label>
            <Label>No <input type="checkbox" value={this.state.rsvp} /></Label>
            <Label>Yes <input type="checkbox" value={this.state.rsvp} /></Label>
          </div>
          <div className='diet'>
            <Label>Dietary programme: </Label>
            <select>
              <option value="Halal">Halal</option>
              <option value="Kosher">Kosher</option>
              <option value="No Pork">No Pork</option>
            </select>
          </div>
          <div className='submit'>
            <Button onClick={this.submit}>Submit</Button>
          </div>
        </Form>

      </div>
    );
  }
}

export default App;
