import React from 'react';
import { Link } from 'react-router-dom';


function HomeServices() {
    
   return (
     

<div className="services-container">
     <p className="services-title">Services we provide to our clients</p>
        <h1 className="services-title">Parintek at your Service</h1>
        <div className="services-border"></div>
        <div className="container">
          <div className="row justify-content-center">
                <div className="col-md-3 text-center">
                    <a className="services-content--box">
                        <div className="services-content__icon">
                          <i class="fa fa-book"></i>
                        </div>
                        <div className="services-content__title"><Link to="/serviceEnquiry" className="Nav_link">
                          File a Patent</Link>
                        </div>
                    </a>
                </div>
                <div className="col-md-3 text-center">
                    <a className="services-content--box">
                        <div className="services-content__icon">
                          <i className="fa fa-building-o"></i>
                        </div>
                        <div className="services-content__title"><Link to="/serviceEnquiry" className="Nav_link">
                          Office Action</Link>
                        </div>
                    </a>
                </div>
                <div className="col-md-3 text-center">
                    <a className="services-content--box">
                        <div className="services-content__icon">
                          <i class="fa fa-copyright fa-4x"></i>
                        </div>
                        <div className="services-content__title"><Link to="/serviceEnquiry" className="Nav_link">
                          Copyrights</Link>
                        </div>  
                    </a>
                </div>
                <div className="col-md-3 text-center">
                    <a className="services-content--box">
                        <div className="services-content__icon">
                          <i class="fa fa-trademark"></i>
                        </div>
                        <div className="services-content__title"><Link to="/serviceEnquiry" className="Nav_link">
                          Trademarks</Link>
                        </div>
                    </a>
                </div>
          </div>
          <div className="row justify-content-center">
          
                <div className="col-md-3 text-center">
                    <a className="services-content--box">
                        <div className="services-content__icon">
                          <i class="fa fa-usd"></i>
                        </div>
                        <div className="services-content__title"><Link to="/serviceEnquiry" className="Nav_link">
                          Get Funds</Link>
                        </div>
                    </a>
                </div>
                <div className="col-md-3 text-center">
                    <a className="services-content--box">
                        <div className="services-content__icon">
                          <i class="fa fa-black-tie"></i>
                        </div>
                        <div className="services-content__title"><Link to="/serviceEnquiry" className="Nav_link">
                          Business Incorporation</Link>
                        </div>
                    </a>
                </div>
                <div className="col-md-3 text-center">
                    <a className="services-content--box">
                        <div className="services-content__icon">
                          <i class="fa fa-wrench"></i>
                        </div>
                        <div className="services-content__title"><Link to="/serviceEnquiry"  className="Nav_link">
                          IPR Services</Link>
                        </div>
                    </a>
                </div>
                
          </div>
         
        </div> 
      
      </div> 
    

   )
}

export default HomeServices; 