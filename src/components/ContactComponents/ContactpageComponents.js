import React from 'react';

function Contact(props) {
    return(
    <>

    <div className="container6">
      <center>
        <h1>Contact Us</h1>
      <br/>
      </center>
      <a href="#contactSection2"> <div class="encircle bounce animated" style={{marginTop:'140px'}}>
        <div class="arrow">
        </div>
        </div>  </a>
    </div>


<div id="contactSection2">
    <section id="contact">
       <div className="container pt-5">
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
    <a href="#contactSection3"> <div class="encircle bounce animated">
  <div class="arrow">
  </div>
</div>  </a>
    </div>


<div id="contactSection3">
    <div style={{backgroundColor: '#f6f6f6',paddingTop:'20px',paddingBottom:'20px'}}>
    <div className="container">
        <h2><center>We would love to hear from you!</center></h2>
          <div className="row">
            <div className="col-md-6">
                <form>
                <div className="form-group mb-1">
                  <input type="text" class="form-control" placeholder=" Your Name" required/>
                </div>
                <div className="form-group mb-1">
                  <input type="email" class="form-control"  placeholder="Your Email" required/>
                </div>
                <div className="form-group mb-1">
                <input type="number" class="form-control" placeholder="Your Contact" required/>
                </div>
                <div className="form-group mb-1">
                  <input type="text" class="form-control" placeholder="Subject"/>
                </div>
                <div className="form-group mb-2">
                  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="6"></textarea>
                </div>
                <button type="submit" class="button1">Send Message</button>
              </form>
            </div> 
          </div> 
        </div>
        <a href="#section7"> <div class="encircle bounce animated" style={{marginTop:'0px'}}>
        <div class="arrow">
        </div>
        </div>  </a>
      </div>
      </div>
      
</>
)
}

export default Contact;