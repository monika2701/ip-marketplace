import React from 'react';
import { Link } from 'react-router-dom';

function HomeMain(props) {
    
   return (
  <div id="section1">
   <div className="container1">
      <div className="container">
     
            <div className="row justify-content-center">
                  <div className="col-md-4 col-sm-12 mt-5 pt-4">
                      <h1><strong>IP Management Services</strong></h1><br/>
                      <p>We help organizations to create IP policy and processes in alignment to their business strategy</p><br/>
                      <button type="button" class="button mr-5"><Link to="/signin" className="Nav_link">Log In</Link></button>
                      <button type="button" class="button"><Link to="/signup" className="Nav_link">Sign Up</Link></button>
                  </div> 
                  <div className="col-md-1"></div>
                  <div className="col-md-7 col-sm-12">
                      <img src="assets/4.png"/>
                  </div>
                  
                  <a href="#section2"> <div class="encircle bounce animated">
  <div class="arrow">
  </div>
</div>  </a>
                 {/*  <a class="ct-btn-scroll" href="#section2"><img alt="Arrow Down Icon" src="assets/13.png"/></a> */}
            </div>
            
           
      </div>
    
    </div>
    
    </div>

          )
    }
    export default HomeMain;