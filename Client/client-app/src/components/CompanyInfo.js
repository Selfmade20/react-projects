import React from 'react';


 const CompanyDetails = ({company}) => {
  
  return (
  <div>
      <ul>        
              <li> Number of employees: {company.cik} </li>
                 <li>Industry Category: {company.lei}</li>
                 <li>Industy Group: {company.id}</li>
                 <li>Stock exchange: {company.ticker}</li>
      </ul>

{/*       
   <h3> {company.name}</h3>
   <button> Show More</button>
   <CompanyDetails company={company}/> */}
 </div>
  )
}

export default CompanyDetails;







//    <li key = {item.id}>
//    Company name: {item.name} <ol> Number of employees: {item.cik} </ol><ol>Industry Category: {item.lei}</ol> <ol>Industy Group: {item.id}</ol> <ol>Stock exchange: {item.ticker}</ol>
//  </li>