import React from 'react';
import './Corporate.css';
import ClickModal  from '../ClickModalComponent';


class Corporates extends React.Component{
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
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
      <div class="carousel-item active">
     <div className="corporatesection1">
       <center>
        <h1>Parintek Innovations Provide</h1>
        <p>FULL IP SERVICES TO</p>
        <h1>Corporates</h1>
       </center>
     </div>
   </div>
    

   <div class="carousel-item">
    <section id="cards-columns">
	    <div className="container pt-4" style={{paddingBottom:'42px'}}>
		
		<div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                <div className="card">
                <img className="card-img-top" src="assets/corp.jpg"  style={{height:'200px'}} alt=""/>
                    <div className="card-body">
                          <h5 className="card-title"><div class="text-center">IP Consultation</div> </h5>
                          <p className="card-text text-center">How To Get Patent ?</p>
                          <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                    </div>   
                 </div>
           </div>
			
			    <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                  <img className="card-img-top" src="assets/corp.jpg" style={{height:'200px'}} alt=""/>
                      <div className="card-body">
                            <h5 className="card-title"><div class="text-center">Innovation Management Services</div> </h5>
                            <p className="card-text text-center">Want a Idea Management Tool?</p>
                            <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                      </div>  
                  </div>
		         </div>
			
			    <div className="col-lg-4 col-md-6 col-sm-6 my-2">
                  <div className="card">
                  <img className="card-img-top" src="assets/corp.jpg"  style={{height:'200px'}} alt=""/>
                      <div className="card-body">
                          <h5 className="card-title"><div class="text-center">IP Services Support</div> </h5>
                          <p className="card-text text-center">Get IPR Services For Your Invention</p>
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
  <span class="width blink_me"><i class="fa fa-angle-left fa-4x" style={{color:'yellow',fontWeight:'bold'}}></i></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
  <span class="width blink_me"><i class="fa fa-angle-right fa-4x" style={{color:'yellow',fontWeight:'bold'}}></i></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</>
    )
  
  }
}
  export default Corporates;