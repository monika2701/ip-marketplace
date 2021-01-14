import React,{Component} from 'react';
import ClickModal  from './ClickModalComponent';




class Students extends React.Component{
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
	  <div id="studentSection1">
      <div className="container3">
          <center>
            <h1>Parintek Innovations Helps Students</h1>
            <br/>
            <h3>WITH FULL IPR SUPPORT </h3>
          </center>
		  <a href="#studentSection2"> <div class="encircle bounce animated" style={{marginTop:'170px'}}>
  <div class="arrow">
  </div>
</div>  </a>
      </div>
	  </div>
	  <div id="studentSection2">
    <section id="students">
		<div className="container">
			
			<div className="row mt-5 mb-3">
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
					<div className="card h-100">
						<div className="card-block block-1">
							<h3 className="card-title">Free Confidential Idea Evaluation</h3>
							<p className="card-text">How To Get Patent For Free ?</p><br/>
							<a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
							
						</div>
					</div>
				</div>
				
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
					<div class="card h-100">
						<div class="card-block block-2">
							<h3 class="card-title">Career Support</h3>
							<p class="card-text mb-4">Want Career Support In IPR Industry ?Click To Get Info About Career Support</p>
							<a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
							
						</div>
					</div>
				</div>
				
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
					<div class="card h-100">
						<div class="card-block block-3 d-flex flex-column">
							<h3 class="card-title">Free Patent Consultation</h3>
							<p class="card-text">Get Fund For An Invention.Get This Plan!</p>
							<a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
							
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex align-items-stretch">
					<div class="card h-100">
						<div class="card-block block-5">
							<h3 class="card-title">Funding for Patent</h3>
							<p class="card-text">Need Funds For Your Invention ?Get Funds To Support Your Project</p>
							<a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
							
						</div>
					</div>
				</div>
				
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex align-items-stretch">
					<div class="card h-100">
						<div class="card-block block-5">
							<h3 class="card-title">Idea Patent</h3>
							<p class="card-text">Do You Want To Get Patent For Your Invention?Click To Get More Info</p>
							
							<a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>

				<ClickModal
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}/>
           
			</div>
			<a href="#section7"> <div class="encircle bounce animated" style={{marginTop:'-10px'}}>
  <div class="arrow">
  </div>
</div>  </a>
		</div>	
	</section>
</div>
<br/>

      </>
    )
  }
}

export default Students;