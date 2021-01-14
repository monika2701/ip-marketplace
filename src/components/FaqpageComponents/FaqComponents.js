import React from 'react';

function Faq(props) {
    return(
     <>

        <div className="container6">
            <center>
              <h1>FAQ</h1>
            </center>
            <a href="#faqSection2"> <div class="encircle bounce animated" style={{marginTop:'160px'}}>
        <div class="arrow">
        </div>
        </div>  </a>
        </div>


<div id="faqSection2">
        <section className="accordion-section clearfix mt-5">
        <div className="container pt-5">
        
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="panel panel-default">
                <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                  <h3 className="panel-title">
                    <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
                      Question : Is my invention secure ?
                    </a>
                  </h3>
                </div>
                <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                  <div className="panel-body px-3 mb-4">
                    <p style={{textAlign:'justify'}}>Yes, your invention is secure with us. Details of your innovation will only be taken after
                         the Non-Disclosure Agreement (NDA) is signed between us. All employees of Parintek 
                         Innovations are under NDA which will help to safeguard your invention. Further, as a 
                         precautionary measure we have a project-based NDA as well for all the personnel involved 
                         with your innovation.</p>
                    
                  </div>
                </div>
              </div>
              
              <div className="panel panel-default">
                <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                  <h3 className="panel-title">
                    <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      Question : What is your workflow?
                    </a>
                  </h3>
                </div>
                <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                  <div className="panel-body px-3 mb-4">
                    <p style={{textAlign:'justify'}}>Once your idea is submitted with us, we will do a quick check for shortlisting it weighing 
                        on the factors, whether the idea is a patentable subject matter, non-patentable subject 
                        matter, falls under the category of abstract idea, etc. We will further contact you if your 
                        idea has a novelty linked to it and is a patentable subject matter through the contact no. 
                        provided in the form filled by you during the registration of your idea. We will have an NDA signed 
                        where we will get the details of your innovations in its entirety. Further, we will perform deep analysis 
                        on the details provided by you for your innovations. Although, being shortlisted and getting a call from our 
                        side does not guarantee for getting a patent, all will be subjected to the present state of the art and various 
                        other factors.</p>
                  </div>
                </div>
              </div>
              
              
              <div className="panel panel-default">
                <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
                  <h3 className="panel-title">
                    <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                      Question : How long shall I wait for response?
                    </a>
                  </h3>
                </div>
                <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                  <div className="panel-body px-3">
                    <p style={{textAlign:'justify'}}>We will try to respond as soon as possible but all will be dependent upon few factors namely
                         the workload, complexity of the innovation, etc.</p>
                  </div>
                </div>
              </div>
            </div>
        
        </div>
      </section>
      <a href="#section7"> <div class="encircle bounce animated" style={{marginBottom:'40px'}}>
        <div class="arrow">
        </div>
        </div>  </a>
      </div>
</>
)
}

export default Faq;
