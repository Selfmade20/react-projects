import React, {Component} from 'react';

class QuoteMachine extends Component {
    constructor() {
    super();
    this.state = {
        isLoaded: false,
        quote: []
    }   
    }


    componentDidMount() {

        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res => res.json())
       .then(json => {
        this.setState({
          isLoaded: true,
          quote: json,
        })
      })
  }

getRandomQuote = event => {
    this.setState({

    })
console.log('clicking')
}

render(){
   return(
     <div className='wrapper'>
         <h1>Quote Machine</h1>
         <button onClick={this.getRandomQuote}>Click to get quote</button>
     </div>  
       
       
   ); 
}

}

export default QuoteMachine;