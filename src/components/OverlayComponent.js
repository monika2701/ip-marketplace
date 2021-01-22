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
              <div class="container">
            <div class="row justify-content-center mt-2"><h4 style={{color:'white',fontWeight:'bold'}}>Find Us</h4></div>
            
                <div class="row mt-3">
            
                <div class="col-md-6">  
                <h4 style={{color:'white',fontWeight:'bold'}}>US Office</h4>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2834.056896744269!2d-93.28908100000001!3d44.738856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d3cdfa52cc32ed0!2sParintek%20Innovation%20Inc!5e0!3m2!1sen!2sin!4v1611223236675!5m2!1sen!2sin&z=15"
                      style={{width:"530px", height:"200px",border:"0"}} frameBorder="0" allowFullScreen=""></iframe>
                </div>
                <div class="col-md-6">  
                <h4 style={{color:'white',fontWeight:'bold',textAlign:"right"}}>India Office</h4>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5415.192590039215!2d77.36251876201543!3d28.623681665277996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef7c00000001%3A0x956090dacabf499d!2sParintek%20Innovation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1611226728834!5m2!1sen!2sin"
                      style={{width:"540px", height:"200px",border:"0"}} frameBorder="0" allowFullScreen=""></iframe>
                </div>
              </div> 

            <div class="row">
          
            
                <div class="col-md-6" style={{color:'white'}}>
                <div>
                <i class="fa fa-map-marker"></i>
                <span>&nbsp;&nbsp;Parintek Innovations Inc. <br/>&nbsp;&nbsp;&nbsp;&nbsp;764 Southcross Dr W, #202<br/>&nbsp;&nbsp;&nbsp; Burnsville, MN 55306, USA</span>
                </div>
                <div class="mt-3">
                <i class="fa fa-phone"></i>
                <span>&nbsp;&nbsp;+1-202-318-0199</span>
                </div>
                <div class="mt-3">
                <i class="fa fa-envelope"></i>
                <span>&nbsp;&nbsp;info@parintek.com</span>
                </div>

                </div>
                <div class="col-md-6" style={{color:'white'}}>
                <div>
                <i class="fa fa-map-marker"></i>
                <span>&nbsp;&nbsp;UNIT 501A , Tower B <br/>&nbsp;&nbsp;&nbsp;&nbsp;Ithum IT Park, A-40<br/>&nbsp;&nbsp;&nbsp;&nbsp;sector 62, NOIDA , UP</span>
                </div>
                <div class="mt-3">
                <i class="fa fa-phone"></i>
                <span>&nbsp;&nbsp;+918076510108</span>
                </div>
                <div class="mt-3">
                <i class="fa fa-envelope"></i>
                <span>&nbsp;&nbsp;info@parintek.com</span>
                </div>
                </div>

            </div>



            </div>
          </div>	
          </div>	
          </>    
        );
    }
}

export default Overlay;


