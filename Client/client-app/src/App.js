import React, { Component } from 'react';
import "./App.css";
import CompanyInfo from './components/CompanyDetails';

class App extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
    result: [],
    loaded: false,
  } 
  }

  componentDidMount() {

    fetch('https://api-v2.intrinio.com/companies?api_key=OjkwNjBhMzgzZDI2NjM5MjYzNTlmMjExNGMxYjYyZmFh')   
    .then(res => res.json())
    .then(json => {
      this.setState({
        loaded: true,
        result: json,
      })
    })
  }

render() {
  console.log(this.state.items)
  var { loaded, result } = this.state;
  
    return (
      

    <div className="App">

      <header className="main" >
        <h1>Company listings</h1>
        </header>

        <div className="button">


        </div>
<div className="companies">

<ol class="wrapper">
        {result.length != 0 ? result.companies.map(item =>(
       <CompanyInfo company={item}/>
        )) : "loading..."}

      </ol>

</div>
</div>
  );
  }


}




export default App;
