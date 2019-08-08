import React, { Component } from 'react';
import "./App.css";
import CompanyInfo from './components/CompanyDetails';

class App extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
    items: [],
    oaded: false,
  } 
  }

  componentDidMount() {

    fetch('https://api-v2.intrinio.com/companies?api_key=OjkwNjBhMzgzZDI2NjM5MjYzNTlmMjExNGMxYjYyZmFh')   
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    })
  }

render() {
  console.log(this.state.items)
  var { isLoaded, items } = this.state;
  
    return (
      

    <div className="App">

      <header className="main" >
        <h1>Company listings</h1>
        </header>

        <div className="button">


        <button className="btn" onClick={this.state.items}>Details</button>

        </div>
<div className="companies">

<ol class="wrapper">
        {items.length != 0 ? items.companies.map(item =>(
       <CompanyInfo company={item}/>
        )) : "loading..."}

      </ol>

</div>
</div>
  );
  }


}




export default App;
