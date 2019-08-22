import React, { Component } from 'react';
import "./App.css";
import CompanyInfo from './components/CompanyInfo';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://api-v2.intrinio.com/companies?api_key=OjkwNjBhMzgzZDI2NjM5MjYzNTlmMjExNGMxYjYyZmFh')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          companies: json,
        })
      })
  }

  render() {
    console.log(this.state.companies)
    var { isLoaded, companies } = this.state;

    return (
      <div className="App">

        <header className="main" >
          <h1>Company Listings</h1>
        </header>

        <div className="companies">

          <li class="wrapper">
            {companies.length != 0 ? companies.companies.map(company => (
              <CompanyInfo company={company} />
            )) : <div className="loader"></div>}

          </li>

        </div>
      </div>
    );
  }


}




export default App;
