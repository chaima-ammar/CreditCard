import React,{Component}from "react";
import "./input.css";   
import Main from '../Credit-card/card'






class Credit extends Component{

 state={
    
    cardholder:'',
      numbercard:'',
      validthru :'',
    }
 
 
  handlecardholder = (event) => {
    this.setState({cardholder: event.target.value });
    console.log(this.state.cardholder)
  }

  handlenumbercard = (event) => {
    this.setState({ numbercard: event.target.value });
    console.log(this.state.numbercard)
  }

  handlevalidthru = (event) => {
    this.setState({validthru: event.target.value });
console.log(this.state.validthru)
  }



  render() {
    return (
      <div >
    
        <div className='inputs'>
        <input className='input' type="text" maxLength='11'  onChange={this.handlecardholder}placeholder="Full Name" />
        <br/><br/>
        <input className='input'maxLength='16'type="text"placeholder="CardNumber"
        onChange={this.handlenumbercard}/>
        <br/><br/>
        <input className='input' maxLength='4'  type="text" placeholder="validthru"onChange={this.handlevalidthru}/>
        </div>

         <div>
        
          <Main input= {this.state}
          /> 
           
           
           </div>
          

        
        




            
          </div>
     



    
    );
  }
}















export default Credit;