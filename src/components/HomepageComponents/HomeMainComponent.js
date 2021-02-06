import React from 'react';
import Ribbon from '../../extras/Ribbon';


function HomeMain() {
    
   return (
  
   <div className="homesection1">
      <div className="container">
            <Ribbon/>
            <div className="row justify-content-center">
                  <div className="col-md-4 col-sm-12 mt-5 pt-5">
                      <h1><strong>IP Management Services</strong></h1><br/>
                      <p>We provide patent search and prosecution support service for building and maintaining optimized IP portfolio.
                            <br/>We also help organizations to create IP policy and processes in alignment to their business strategy</p><br/>
                  </div> 
                  <div className="col-md-1"></div>
                  <div className="col-md-7 col-sm-12" style={{marginTop:'30px'}}>
                      <img src="assets/4.png" alt=""/>
                  </div>
                  
                 
               
            </div>
            
           
      </div>
    
    </div>
    


          )
    }
    export default HomeMain;