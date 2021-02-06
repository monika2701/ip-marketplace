import React from 'react';
import './Student.css';
import StudentModal  from './studentModal';
import {Link} from 'react-router-dom';




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
	 
	 <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
	 <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>
  		<div class="carousel-inner">
  		<div class="carousel-item active">
      <div className="studentsection1">
          <center>
            <h1>Parintek Innovations Helps Students</h1>
            <br/>
            <h3>WITH FULL IPR SUPPORT </h3>
          </center>
		 
     
	  </div>
	 </div>

	 <div class="carousel-item">
    <section id="students">
		<div className="container pb-4">
			
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
					<div className="card h-100">
						<div className="card-block block-1">
							<h3 className="card-title">Free Confidential Idea Evaluation</h3>
							<p className="card-text">How To Get Patent For Free ?</p><br/>
							<a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
							
						</div>
					</div>
				</div>
				
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
					<div className="card h-100">
						<div className="card-block block-2">
							<h3 className="card-title">Career Support</h3>
							<p className="card-text mb-4">Want Career Support In IPR Industry ?Click To Get Info About Career Support</p>
							<a href="https://www.parintek.com/career.php" target="_blank" >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
							
						</div>
					</div>
				</div>
				
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-3">
					<div className="card h-100">
						<div className="card-block block-3 d-flex flex-column">
							<h3 className="card-title">Free Patent Consultation</h3>
							<p className="card-text">Get Fund For An Invention.Get This Plan!</p>
							<Link to="/serviceEnquiry">Click here<i class="fa fa-angle-double-right ml-2"></i></Link>
							
						</div>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex align-items-stretch">
					<div className="card h-100">
						<div className="card-block block-5">
							<h3 className="card-title">Funding for Patent</h3>
							<p className="card-text">Need Funds For Your Invention ?Get Funds To Support Your Project</p>
							<a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
							
						</div>
					</div>
				</div>
				
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 d-flex align-items-stretch">
					<div className="card h-100">
						<div className="card-block block-5">
							<h3 className="card-title">Idea Patent</h3>
							<p className="card-text">Do You Want To Get Patent For Your Invention?Click To Get More Info</p>
							
							<a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Click here<i class="fa fa-angle-double-right ml-2"></i></a>
						</div>
					</div>
				</div>

				<StudentModal
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

export default Students;