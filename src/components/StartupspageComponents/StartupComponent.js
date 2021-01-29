import React from 'react';
import ClickModal  from '../ClickModalComponent';

class Startups extends React.Component{
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
                <div className="startupsection1">
                    <center>
                    <h1>Parintek Innovations Provide</h1>
                    <p>FULL IPR SERVICES TO</p>
                    <h1>Start Ups</h1>
                    </center>
                    
                </div>
                </div>
    
    
        <div class="carousel-item">
        <section id="cards-columns">
	      <div className="container  pt-2 pb-5">
		        <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                    <div className="card">
                    <img className="card-img-top" src="assets/startup.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title"><div className="text-center">IP Consultation</div> </h5>
                            <p className="card-text text-center">How To Get Patent ?</p><br/>
                            <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                        </div> 
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                    <div className="card">
                    <img className="card-img-top" src="assets/startup.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title"><div className="text-center">Patent Filing</div> </h5>
                            <p className="card-text text-center">Do You Want To Get Patent For Your Invention</p>
                            <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                        </div>  
                    </div>
                </div>
			
                <div className="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                    <div className="card">
                    <img className="card-img-top" src="assets/startup.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title"><div className="text-center">IP Services Support</div> </h5>
                            <p className="card-text text-center">Get IPR Services For Your Invention</p>
                            <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                        </div>   
                    </div>
                </div>
			
                <div className="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                    <div className="card">
                    <img className="card-img-top" src="assets/startup.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title"><div className="text-center">Novelty Verification</div> </h5>
                            <p className="card-text text-center">Check Is Your Idea Patentable?</p>
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
  export default Startups;