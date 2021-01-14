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
      
      <div class="container4">
          <center>
          <h1>Parintek Innovations Helps Researchers</h1>
          <br/>
          <h3>WITH FULL IP SUPPORT</h3>
          </center>
          <a href="#researchSection2"> <div class="encircle bounce animated" style={{marginTop:'170px'}}>
  <div class="arrow">
  </div>
</div>  </a>
      </div>
      
      <div id="researchSection2">
      <section id="cards-columns">
	        <div class="container  pt-3 mb-5 pb-5">
		          <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                        <div class="card">
                        <img class="card-img-top" src="https://i.pinimg.com/564x/4e/1f/eb/4e1feb9123d1322fe7b8585d26f4a737.jpg" alt="Card cap"/>
                            <div class="card-body">
                                <h5 class="card-title"><div class="text-center">Free Confidential Idea Evaluation</div> </h5>
                                <p class="card-text text-center">How To Get Patent for Free?</p><br/>
                                <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                            </div>  
                        </div>
                  </div>
                  
                  <div class="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                        <div class="card">
                        <img class="card-img-top" src="https://i.pinimg.com/564x/4e/1f/eb/4e1feb9123d1322fe7b8585d26f4a737.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title"><div class="text-center">Idea Patent</div> </h5>
                                <p class="card-text text-center">Do You Want To Get Patent For Your Invention</p><br/>
                                <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                            </div> 
                        </div>
                  </div>
			
                  <div class="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                      <div class="card">
                      <img class="card-img-top" src="https://i.pinimg.com/564x/4e/1f/eb/4e1feb9123d1322fe7b8585d26f4a737.jpg" alt="Card image cap"/>
                          <div class="card-body">
                              <h5 class="card-title"><div class="text-center">Free Patent Consultation</div> </h5>
                              <p class="card-text text-center">Get Fund For An Invention</p><br/>
                              <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                          </div>  
                      </div>
                  </div>
                  
                  <div class="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                      <div class="card">
                      <img class="card-img-top" src="https://i.pinimg.com/564x/4e/1f/eb/4e1feb9123d1322fe7b8585d26f4a737.jpg" alt="Card image cap"/>
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
                <a href="#section7"> <div class="encircle bounce animated">
  <div class="arrow">
  </div>
</div>  </a>
		      </div>
            
      </section>
      </div>
</>
   )
}
}
export default Researchers;