import React, { Component } from 'react';
import CompanyDetails from './CompanyDetails';



class CompanyInfo extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
   isDisplay: false
  } 

  }
toggleDisplay = () =>{
  this.setState({
    isDisplay: !this.state.isDisplay
  })
  
}
  
render() {
    
  const {company} = this.props;
  console.log(this.state.isDisplay)
  return (
       <div>                    
        <h3> {company.name}</h3>
         <button style={{padding:"0.5rem" , textTransform:"uppercase"}} onClick={()=> this.toggleDisplay()}> Show Info</button>
         {this.state.isDisplay ? <CompanyDetails company={company}/>: null}
     </div>
  );
  }


}




export default CompanyInfo;
