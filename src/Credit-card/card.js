import React from "react";
import './card.css';
import master from './master.png';
import puce from './puce.jpg';




function Cardnumber(number){
 
  let resultStr = ' '
 for(let i =0; i < 16; i += 4) {
  number = number.toString();

    resultStr += number.slice(i ,i+4,) + ' '
 }
 
 return resultStr;


  
}




function Validthru(number){
    
  
  let number1 =number.toString();
  return number1.slice(0,2) + '/'+ number1.slice(2)

}







function Main(props){
    return(     
<div>

<div className="credit-card">
    <h1 className="credit-card-title">Master Card</h1>
    <h4 className="sous-title">Gold</h4>
    <div className="credit-card-chip" >
      <img className="puce" src={puce} alt="puce" />
      </div>
    <div className="credit-card-content">
      <div className="credit-card-text">
          <h2 className="credit-card-number">
            {Cardnumber(props.input.numbercard.padEnd(16,'*'))}
          </h2>
          <h2 className="credit-card-valid-thru">
            <p className="expiry">Valid-thru</p>
           {Validthru(props.input.validthru)}
          </h2>
          <h2 className="credit-card-holder-name">
              {(props.input. cardholder.toUpperCase())}
          
          </h2>
      </div>
      <div className="credit-card-logo">
      <img className="logo" src={master} alt="logo " width="50px"/>
      </div>
     
    </div>
    
  </div>



  </div>



    
    
  )
    
}
 

export default Main;