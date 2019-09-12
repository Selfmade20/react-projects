import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
    }
  }

  getQuote = () => {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((response) => this.setState({ quote: response.data.quotes[Math.floor(Math.random() * 102)] }))
  }

  componentDidMount = () => {
    this.getQuote();
  }


  render() {

    return (
      <div className='QuoteMachine'>
        <div className= 'display-box'>
          <div className='quote'>
          <h3>{this.state.quote !== null && this.state.quote.quote}</h3>
          </div>
          <div className='author'>
          <h4>{this.state.quote !== null && this.state.quote.author}</h4>
          </div>
        </div>
        <button onClick={this.getQuote}>Get Quote</button>
      </div>


    );
  }

}

export default QuoteMachine;