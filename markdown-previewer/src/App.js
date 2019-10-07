import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'



class App extends React.Component {
  constructor() {
      super();
      this.state = {
          source: "markdown"
      }  
  }

  handleChange(e) {
      this.setState({ source: e.target.value });
  }
  
  render(){
  return (
    <div>
      <h1>Markdown Previewer</h1>
      <div className="container">
        <h1> Markdown Previewer</h1>
        <textarea rows="18" cols="48" onChange={this.handleChange.bind(this)} />
        <ReactMarkdown source={this.state.source} />
      </div>
    </div>

  );
}
}

export default App;
