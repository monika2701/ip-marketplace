import React from 'react';
/* import { Link } from 'react-router-dom'; */

function HomeMain(props) {
    
   return (
  
   <div className="homesection1">
      <div className="container">
     
            <div className="row justify-content-center">
                  <div className="col-md-4 col-sm-12 mt-5 pt-4">
                      <h1><strong>IP Management Services</strong></h1><br/>
                      <p>We provide patent search and prosecution support service for building and maintaining optimized IP portfolio.
                            <br/>We also help organizations to create IP policy and processes in alignment to their business strategy</p><br/>
                     {/*  <button type="button" class="homebutton mr-5"><Link to="/signin" className="Nav_link">Log In</Link></button>
                      <button type="button" class="homebutton"><Link to="/signup" className="Nav_link">Sign Up</Link></button> */}
                  </div> 
                  <div className="col-md-1"></div>
                  <div className="col-md-7 col-sm-12">
                      <img src="assets/4.png" alt=""/>
                  </div>
                  
                 
               
            </div>
            
           
      </div>
    
    </div>
    


          )
    }
    export default HomeMain;