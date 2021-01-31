import React,{Component} from 'react';

class ContactAddress extends Component {
  

  render(){
    return(
    <>
    
{/* <div className="contactsection1">
<center>
  <h1>Contact Us</h1>
<br/>
</center>
</div> */}


<section id="contact">
 <div className="container pt-5 pb-1">
    <div className="row">
       <div className="col-sm-12 col-md-6 col-lg-4 my-5">
         <div className="card border-0">
            <div className="card-body text-center">
              <i className="fa fa-map-marker fa-3x mb-3" aria-hidden="true"></i>
              <h4 className="text-uppercase mb-3">Address</h4>
              <address><strong>US : </strong>764 Southcross Dr W, #202, Burnsville, MN 55306, USA</address>
              <address><strong>India : </strong>UNIT 501A , Tower B, Ithum IT Park, A-40, sector 62, NOIDA , UP Noida, Uttar Pradesh - 201309.</address>
            </div>
          </div>
       </div>
       <div className="col-sm-12 col-md-6 col-lg-4 my-5">
         <div className="card border-0">
            <div className="card-body text-center">
              <i className="fa fa-phone fa-3x mb-3" aria-hidden="true"></i>
              <h4 className="text-uppercase mb-3">Call Us</h4> 
              <p><strong>US : </strong><a href="tel:+1-202-318-0199">+1-202-318-0199</a></p>
              <p><strong>India : </strong><a href="tel:+91-120-4355387">+91-120-4355387</a>,<a href="tel:+918076510108">+918076510108</a></p>
            </div>
          </div>
       </div>
       <div className="col-sm-12 col-md-6 col-lg-4 my-5">
         <div className="card border-0">
            <div className="card-body text-center">
              <i className="fa fa-envelope fa-3x mb-3" aria-hidden="true"></i>
              <h4 className="text-uppercase mb-3">Email</h4>
              <p><strong>US : </strong><a href="mailto:sales@parintek.com">sales@parintek.com</a></p>
              <p><strong>India : </strong><a href="mailto:info@parintek.com">info@parintek.com</a></p>
            </div>
          </div>
       </div>
     </div>
 </div>
</section>

</>
    )
  }
}

export default ContactAddress;