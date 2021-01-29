import React from 'react';
import ClickModal  from '../ClickModalComponent';


class Researchers extends React.Component{
        state = {
           modalOpen: false
        }
      
        handleModalOpen = () => {
           this.setState((prevState) => {
              return{
                 modalOpen: !prevState.modalOpen
              }
           })
        }
      
        render(){  
   return (
    <>
      
      <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
  <div class="carousel-inner">
  <div class="carousel-item active">
      <div class="researchersection1">
          <center>
          <h1>Parintek Innovations Helps Researchers</h1>
          <br/>
          <h3>WITH FULL IP SUPPORT</h3>
          </center>
          
      </div>
      </div>
     
      <div class="carousel-item">
      <section id="cards-columns">
	        <div class="container pt-2 pb-5">
		          <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                        <div class="card">
                        <img class="card-img-top" src="assets/research.jpg" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title"><div class="text-center">Free Confidential Idea Evaluation</div> </h5>
                                <p class="card-text text-center">How To Get Patent for Free?</p><br/>
                                <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                            </div>  
                        </div>
                  </div>
                  
                  <div class="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                        <div class="card">
                        <img class="card-img-top" src="assets/research.jpg" alt=""/>
                            <div class="card-body">
                                <h5 class="card-title"><div class="text-center">Idea Patent</div> </h5>
                                <p class="card-text text-center">Do You Want To Get Patent For Your Invention</p><br/>
                                <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                            </div> 
                        </div>
                  </div>
			
                  <div class="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                      <div class="card">
                      <img class="card-img-top" src="assets/research.jpg" alt=""/>
                          <div class="card-body">
                              <h5 class="card-title"><div class="text-center">Free Patent Consultation</div> </h5>
                              <p class="card-text text-center">Get Fund For An Invention</p><br/>
                              <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                          </div>  
                      </div>
                  </div>
                  
                  <div class="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                      <div class="card">
                      <img class="card-img-top" src="assets/research.jpg" alt=""/>
                          <div class="card-body">
                              <h5 class="card-title"><div class="text-center">Funding For Patent</div> </h5>
                              <p class="card-text text-center">Need Funds For Your Invention? Get Funds To Support Your Project</p>
                              <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                          </div>  
                      </div>
                  </div>
                  <ClickModal
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}/>
	            </div>
               
		      </div>
            
      </section>
      </div>
	</div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</>
   )
}
}
export default Researchers;