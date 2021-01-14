import React from 'react';
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
     <div className="container5">
       <center>
        <h1>Parintek Innovations Provide</h1>
        <p>FULL IP SERVICES TO</p>
        <h1>Corporates</h1>
       </center>
       <a href="#corporateSection2"> <div class="encircle bounce animated" style={{marginTop:'120px'}}>
  <div class="arrow">
  </div>
</div>  </a>
     </div>

     <div id="corporateSection2">
    <section id="cards-columns">
	    <div className="container pt-5 mb-5 pb-5">
		
		<div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                <img className="card-img-top" src="https://i.pinimg.com/564x/c8/a3/76/c8a376d9ae4a2005d5ce5f33dc327bbc.jpg" alt="Card image cap" style={{height:'200px'}}/>
                    <div className="card-body">
                          <h5 className="card-title"><div class="text-center">IP Consultation</div> </h5>
                          <p className="card-text text-center">How To Get Patent ?</p>
                          <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                    </div>   
                 </div>
           </div>
			
			    <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card">
                  <img className="card-img-top" src="https://i.pinimg.com/564x/c8/a3/76/c8a376d9ae4a2005d5ce5f33dc327bbc.jpg" alt="Card image cap" style={{height:'200px'}}/>
                      <div className="card-body">
                            <h5 className="card-title"><div class="text-center">Innovation Management Services</div> </h5>
                            <p className="card-text text-center">Want a Idea Management Tool?</p>
                            <button class="btn btn-primary btn-block" onClick={this.handleModalOpen}>Click Here</button>
                      </div>  
                  </div>
		         </div>
			
			    <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="card">
                  <img className="card-img-top" src="https://i.pinimg.com/564x/c8/a3/76/c8a376d9ae4a2005d5ce5f33dc327bbc.jpg" alt="Card image cap" style={{height:'200px'}}/>
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
         <a href="#section7"> <div class="encircle bounce animated" style={{marginTop:'10px'}}>
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
  export default Corporates;