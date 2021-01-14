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
     <div className="container5">
          <center>
          <h1>Parintek Innovations Provide</h1>
          <p>FULL IPR SERVICES TO</p>
          <h1>Start Ups</h1>
          </center>
          <a href="#startupSection2"> <div class="encircle bounce animated" style={{marginTop:'120px'}}>
  <div class="arrow">
  </div>
</div>  </a>
     </div>

     <div id="startupSection2">
    <section id="cards-columns">
	      <div className="container  pt-3 mb-5 pb-5">
		        <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                    <div className="card">
                    <img className="card-img-top" src="https://i.pinimg.com/564x/97/d4/f4/97d4f462a21a628219cf8239680507de.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title"><div className="text-center">IP Consultation</div> </h5>
                            <p className="card-text text-center">How To Get Patent ?</p><br/>
                            <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                        </div> 
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                    <div className="card">
                    <img className="card-img-top" src="https://i.pinimg.com/564x/97/d4/f4/97d4f462a21a628219cf8239680507de.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title"><div className="text-center">Patent Filing</div> </h5>
                            <p className="card-text text-center">Do You Want To Get Patent For Your Invention</p>
                            <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                        </div>  
                    </div>
                </div>
			
                <div className="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                    <div className="card">
                    <img className="card-img-top" src="https://i.pinimg.com/564x/97/d4/f4/97d4f462a21a628219cf8239680507de.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title"><div className="text-center">IP Services Support</div> </h5>
                            <p className="card-text text-center">Get IPR Services For Your Invention</p>
                            <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                        </div>   
                    </div>
                </div>
			
                <div className="col-lg-3 col-md-6 col-sm-6 my-2 d-flex align-items-stretch">
                    <div className="card">
                    <img className="card-img-top" src="https://i.pinimg.com/564x/97/d4/f4/97d4f462a21a628219cf8239680507de.jpg" alt="Card image cap"/>
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
              <a href="#section7"> <div class="encircle bounce animated" style={{marginTop:'5px'}}>
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
  export default Startups;