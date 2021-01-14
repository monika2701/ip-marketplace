import React from 'react';


function HomeContact(props) {
    
   return (
   <div id="section6">
      <div className="container pt-3 mb-5">
          <h1><center>Send Us Your Details to get a Free Call Back</center></h1>
          <p><center>Call Us@+91-8076510108 and get Patent Consultation FREE</center></p>
          
            <div className="row">
                <div className="col-md-6">
                    <img src="assets/8.png" style={{position:'relative',top:'-8px',textAlign:'center'}}/> 
                </div>
                <div className="col-md-6">
                  <div id="contact-form">
                    <form className="form">
                        <div className="form-group ">
                          <input type="text" class="form-control" id="name" placeholder="Name" required/>
                          <label class="form-label" for="name">Name</label>
                        </div>
                        <div className="form-group ">
                          <input type="text" class="form-control" id="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                          <label class="form-label" for="surname">Email</label>
                        </div>
                        <div className="form-group ">
                          <input type="tel" class="form-control" id="contact" placeholder="Contact Number" pattern="[0-9]{10}" required/> 
                          <label class="form-label" for="surname">Contact Number</label>
                        </div>
                        <div className="form-group ">
                          <textarea className="form-control textarea" id="message" rows="1" placeholder="Write a message"></textarea>
                          <label class="form-label" for="message">Write a message</label>
                        </div>
                        <button type="submit" class="btn btn-blue text-center">Submit </button>
                    </form>
            </div>
            
        </div>
        
      </div>
      <a href="#section7"> <div class="encircle bounce animated" style={{marginTop:'-12px'}}>
  <div class="arrow">
  </div>
</div>  </a>
    </div>
   
</div>

   )
}

export default HomeContact;