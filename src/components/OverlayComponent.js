import React,{Component} from 'react';
import $ from 'jquery';

class Overlay extends Component {

   componentDidMount(){
        $(function() {

            $('[data-curtain-menu-button]').on("click",function(){
            $('body').toggleClass('curtain-menu-open');
            });
        });
    
   }
  
    render() {
        return (
            <>
            <div class="curtain-menu-button" data-curtain-menu-button>
            <div class="curtain-menu-button-toggle">
              <span data-tooltip aria-haspopup="true" class="has-tip" data-disable-hover="false" tabindex="1" title="Show Menu Options">  </span>
                  <div class="bar1"></div>
              <div class="bar2"></div>
              
            </div>
          </div>
          
        
          <div class="curtain-menu">
            <div class="curtain"></div>
            <div class="curtain"></div>
            <div class="curtain"></div>
            <div class="curtain-menu-wrapper">
            <div class="row justify-content-center mt-5"><h4 style={{color:'white',fontWeight:'bold'}}>Find Us</h4></div>
            
                <div class="row">
            
                    <div class="col-md-6 sm-12">
              <ul class="curtain-menu-list menu vertical">
                <li> US</li>
                <li>Parintek Innovations Inc. 764 Southcross Dr W, #202, Burnsville, MN 55306, USA</li>
                <li>+1-202-318-0199</li>
                <li>info@parintek.com</li>
                  
              </ul>
              </div>
              <div class="col-md-6 sm-12">
              <ul class="curtain-menu-list menu vertical">
                <li>India</li>
                <li>UNIT 501A , Tower B, Ithum IT Park, A-40, sector 62, NOIDA , UP Noida, Uttar Pradesh - 201309.</li>
                <li>+918076510108</li>
                <li>info@parintek.com</li>
                  
              </ul>
              </div>
              </div>
                  
                
            </div>
          </div>		
          </>    
        );
    }
}

export default Overlay;


