import React from 'react';


const CompanyDetails = ({company}) => {
  
  return (
  <div>
      <ul className="ul">        
              <li> Number of employees: {company.cik*1} </li>
                 <li>Industry Category: {company.lei}</li>
                 <li>Industry Group: {company.id}</li>
                 <li>Stock exchange: {company.ticker}</li>
      </ul>

 </div>
  )
}

export default CompanyDetails;







//    <li key = {item.id}>
//    Company name: {item.name} <ol> Number of employees: {item.cik} </ol><ol>Industry Category: {item.lei}</ol> <ol>Industy Group: {item.id}</ol> <ol>Stock exchange: {item.ticker}</ol>
//  </li>