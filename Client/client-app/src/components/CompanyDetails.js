import React, { Component } from 'react';
import CompanyDetails from './CompanyDetails';


class CompanyInfo extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
   
  } 

  }

render() {

    const {company} = this.props;
    return (
    <div>                    
        <h3> {company.name}</h3>
        <button> Show More</button>
        <CompanyDetails company={company}/>
    </div>
  );
  }


}




export default CompanyInfo;
