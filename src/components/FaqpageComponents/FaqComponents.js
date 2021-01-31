import React from 'react';

function Faq() {
    return(
     <>

     {/*  <div id="carousel" class="carousel slide" data-ride="carousel" data-pause="false" data-interval="5000">
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
      <div class="carousel-item active">
        <div className="faqsection1">
            <center>
              <h1>FAQ</h1>
            </center>
        </div>
       </div>


       <div class="carousel-item"> */}
       <div class="container pb-2">

    
    
      <div class="row mt-5 pb-3">
        <div class="col-lg-12 mx-auto">
        
            <div id="accordionExample" class="accordion shadow">

                
                <div class="card">
                    <div id="headingOne" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <a data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"  class="btn  collapsed text-dark font-weight-bold text-uppercase collapsible-link" >  Question : Is my invention secure ?</a>
                        </h2>
                    </div>
                    <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" class="collapse">
                        <div class="card-body mb-0">
                            <p class="font-weight-light" style={{textAlign:'justify',marginBottom:'0px',padding:'0px'}}>Yes, your invention is secure with us. Details of your innovation will only be taken after
                         the Non-Disclosure Agreement (NDA) is signed between us. All employees of Parintek 
                         Innovations are under NDA which will help to safeguard your invention. Further, as a 
                         precautionary measure we have a project-based NDA as well for all the personnel involved 
                         with your innovation.</p>
                        </div>
                    </div>
                </div>

              
                <div class="card">
                    <div id="headingTwo" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <a data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" class="btn  collapsed text-dark font-weight-bold text-uppercase collapsible-link"> Question : What is your workflow?</a>
                        </h2>
                    </div>
                    <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" class="collapse show">
                    <div class="card-body">
                            <p class="font-weight-light" style={{textAlign:'justify',marginBottom:'0px',padding:'0px'}}>Once your idea is submitted with us, we will do a quick check for shortlisting it weighing 
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

            
                <div class="card">
                    <div id="headingThree" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <a type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">Question : How long shall I wait for response?</a>
                        </h2>
                    </div>
                    <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" class="collapse">
                        <div class="card-body">
                            <p class="font-weight-light m-0" style={{textAlign:'justify',marginBottom:'0px',padding:'0px'}}>We will try to respond as soon as possible but all will be dependent upon few factors namely
                         the workload, complexity of the innovation, etc.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>

     {/*  </div>
	</div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
  <span class="width blink_me"><i class="fa fa-arrow-left font" style={{color:'black'}}></i></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
  <span class="width blink_me"><i class="fa fa-arrow-right font" style={{color:'black'}}></i></span>
    <span class="sr-only">Next</span>
  </a>
</div> 
      */}
</>
)
}

export default Faq;
