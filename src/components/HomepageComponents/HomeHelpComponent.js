import React from 'react';
import { Link } from 'react-router-dom';
import ClickModal  from '../ClickModalComponent';

class HomeHelp extends React.Component{
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
    
    <div className="homesection3">
    <section id="home">
        <div className="container" style={{paddingBottom:'25.5px'}}>

          <div className="row">
          
              <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="card card_red text-center h-100">
                  <div className="title">
                    <h2><Link to="/students" className="Nav_link">Students</Link></h2>
                    <p>How can we help you?</p>
                    <hr class="help"></hr>
                  </div>
                  <div className="option">
                    <ul>
                      <li><Link to="/students" className="Nav_link">Idea Support</Link></li>
                      <li><a onClick={this.handleModalOpen}  style={{cursor: 'pointer'}} >Submit Idea for Evaluation</a></li>
                      <ClickModal
                        modalOpen={this.state.modalOpen}
                        handleModalOpen={this.handleModalOpen}/>
                      <li><a href="https://www.parintek.com/book/"  style={{color: 'white', textDecoration: 'none'}}>Learn About Patent</a></li>
                      <li><a href="https://www.parintek.com/career.php" style={{color: 'white', textDecoration: 'none'}}>Career Support in IP</a></li>
                    </ul>
                  </div>
                </div>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="card card_violet text-center h-100">
                  <div className="title">
                    <h2><Link to="/startups" className="Nav_link">Start Ups</Link></h2>
                    <p>How can we help you?</p>
                    <hr className="help"></hr>
                  </div>
                  <div className="option">
                    <ul>
                      <li><Link to="/startups" className="Nav_link">Patent Filing</Link></li>
                      <li><Link to="/serviceEnquiry" className="Nav_link">Request for Consultation</Link></li>
                      <li><a href="https://www.parintek.com/services.php"  style={{color: 'white', textDecoration: 'none'}}>IPR Services</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3">
                  <div className="card card_three text-center h-100">
                  <div className="title">
                    <h2><Link to="/researchers" className="Nav_link">Researchers</Link></h2>
                    <p>How can we help you?</p>
                    <hr className="help"></hr>
                  </div>
                  <div className="option">
                    <ul>
                      <li><Link to="/serviceEnquiry" className="Nav_link">Request for Consultation</Link></li>
                      <li><Link to="/researchers" className="Nav_link">Idea Support</Link></li>
                      <li><Link to="/serviceEnquiry" className="Nav_link">Request for Fund to support your Innovation</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 h-100">
                  <div className="card card_four text-center">
                    <div className="title">
                      <h2><Link to="/corporates" className="Nav_link">Corporates</Link></h2>
                      <p>How can we help you?</p>
                      <hr className="help"></hr>
                    </div>
                    <div className="option">
                      <ul>
                      <li><Link to="/serviceEnquiry" className="Nav_link">Request for Consultation</Link></li>
                        <li><Link to="/serviceEnquiry" className="Nav_link">Patentability Search</Link></li>
                        <li><a href="https://marketplace.parintekinnovation.com/invention-management-tool" style={{color: 'white', textDecoration: 'none'}}>Invention Management Tool</a></li>
                        <li><a href="https://www.parintek.com/services.php" style={{color: 'white', textDecoration: 'none'}}>IPR Services</a></li>
                      </ul>
                    </div>
                </div>
             </div>
            
            
           </div>
         
        </div>
   </section>
</div> 

 

          )
    }
  }
    export default HomeHelp;