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

  setValue = (event) => {
    this.setState({ name: event.target.value })
    this.setState({ email: event.target.value })
    this.setState({ cellNumber: event.target.value })
  }

  submit = () => {

    this.setState({
      name: ""
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>RSVP</h1>
        </header>
        <Form>
          <Label>Name:
            <Input type='text' required></Input>
          </Label>
          <Label>Email Address:
            <Input type='email' required></Input>
          </Label >
          <Label>Cell Number:
            <Input type="numbers"></Input>
          </Label>
          <Label>RSVP:</Label>
          <Label><input type="checkbox" /></Label>
          <Label>Yes<input type="checkbox" /></Label>
          <Label>Dietary programme: </Label>
          <select>
            <option>Halal</option>
            <option>Kosher</option>
            <option>No Pork</option>
          </select>

          <Button onClick={this.state.name}>Submit</Button>
        </Form>

      </div>
    );
  }
}

export default App;
