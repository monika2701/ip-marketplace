import React,{Component} from 'react';
import './Webinar.css';
import axios from 'axios';
import Alert from  '../../extras/alert';

class Webinar extends Component {
  state = {

      first_name:'',
      last_name :'',
      email:'',
      company_name:'',
      webinar_name :'Webinar',
      payment_status:'0',
      payment_value:'0',
      no_of_session_booked:'1',
      formError: false
  };
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }
  handleSubmit = event => {
    event.preventDefault();
    const url = 'https://marketplace.parintekinnovation.com/api/webinar.php?method=BookWebinar';
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;
    const email = this.state.email;
    const company_name = this.state.company_name;
    const webinar_name = this.state.webinar_name;
    const payment_status = this.state.payment_status;
    const payment_value = this.state.payment_value;
    const no_of_session_booked = this.state.no_of_session_booked;
    let bodyFormData = new FormData();
    bodyFormData.set('first_name', first_name);
    bodyFormData.set('last_name', last_name);
    bodyFormData.set('email', email);
    bodyFormData.set('company_name',company_name);
    bodyFormData.set('webinar_name',webinar_name);
    bodyFormData.set('payment_status',payment_status);
    bodyFormData.set('payment_value',payment_value);
    bodyFormData.set('no_of_session_booked',no_of_session_booked);
    var object = {};
    bodyFormData.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);
  
    axios.post(url, json,{
      headers:{
        'Content-Type':'application/json'
      }
    }) 
    
        .then(result => {
         console.log(result.data);
         this.setState({formError: true});
            
        })
        .catch(error => {
            console.log(error);
          
        });
};

  
 render(){
   return (
  <>
<body>

    <img src="https://marketplace.parintekinnovation.com/images/header.png"  style={{width: "100%" ,
       marginBottom: '3%',    borderTop: '26px solid blue'}}class="ïmg-responsive"/>

<div class="container">
    <div class="row">
    <div class="col-md-7">
        <div class="col-md-12">
        <h5 style={{fontSize: "26px",
                    margin: '2%',
                    color: '#05053e',
                    letterSpacing: '2px',
                    fontFamily: 'cursive',
                    fontWeight: '400'}}>About the webinar</h5>
      
            <h5 style={{fontSize: "16px",
                    marginLeft: '4%',
                    color: '#000',
                    fontFamily: '"Open Sans", Arial, sans-serif',
                    fontWeight: '500'}}>This session is focused on answering
                Intellectual property (IP) related
                queries.</h5>
         
                <h5 style={{fontSize: "19px",
                    margin: '4%',
                    color: '#05053e',
                    letterSpacing: '2px',
                    fontFamily: 'cursive',
                    }} >Some questions handpicked by the Speaker to be covered during the session:</h5>
            
           
            <ul style={{fontSize: "18px",
                    marginLeft: '4%',
                    color: '#000',
                    letterSpacing: '1px',
                    fontFamily: '"Open Sans", Arial, sans-serif',
                    fontWeight: '500'}}>
                <li style={{fontWeight: '500'}}>Is IP important for a small and
                    medium size company?</li>
                <li style={{fontWeight: '500'}}>When is the right time for start-ups
                    to think about IP?</li>
                <li style={{fontWeight: '500'}}>Do I need to worry about protecting
                    innovation in foreign country?</li>
                <li style={{fontWeight: '500'}}>How IP helps in monetization?</li>
                <li style={{fontWeight: '500'}}>Can I prepare and file my own patent
                    application?</li>
                <li style={{fontWeight: '500'}}>What is the importance of Non Disclosure Agreement?</li>
                <li style={{fontWeight: '500'}}>How Freedom to Operate check
                    helps?</li>
            </ul>
            <div class="row" style={{fontSize: "14px",
                    letterSpacing: '1px'}}>
               {/*  <p>Further, five
                    participants can have an option to block
                    a 10 minutes one on one session with
                    speaker post presentation. The one on
                    one session needs to booked at the time
                    of registration for Q&A session</p> */}


                  
               
                    <div class="section row col-md-12" style={{fontSize: "14px",
                                                                margin: '0 auto',
                                                                padding: '10px',
                   }}>



        <div class="row"> 
        
            <div class="col-md-12 col-sm-12" style={{paddingTop:'2%'}}>
            <h5 style={{fontSize: "26px",
                         margin: '2%',
                         color:'05053e',
                         letterSpacing:'2px',
                         fontFamily:'cursive',
                         fontWeight:'400',
                        
                   }}>About the Speaker</h5>

            <div style={{borderRadius:'50%',
                          backgroundColor:'lightseagreen',
                          border:'1px solid var(--white)',
                          height:'34% !important'
                   }}> <img class="img" style={{borderRadius:'50%',
                                                width:'39%',
                                                border:'1px solid #37869d',
                                                height:'34% !important'}}src="https://marketplace.parintekinnovation.com/images/rajesh.png" />
    <div style={{width:'50%',
                  position:'relative',
                  left:'2%',
                  top:'40px',
                  display:'inline-block',
                  }}>
                    <h6 style={{color:'#fff',
                fontWeight:'700',
                fontSize:'27px'}}>Rajesh Singh</h6>

    <h6  style={{color:'#fff'}}>Director and Co-Founder - Parintek Innovations,</h6>
    <h6 style={{color:'#fff'}}>Ex–VP CPA Global,</h6>
    <h6   style={{color:'#fff'}}>Ex-Assistant professor, NIT</h6>
    </div>
    
    
</div>
           
    
            
                <p style={{padding:'4px',
              textAlign:'justify',
              color:'#000',
              fontStyle:'italic',
              marginTop:'4%',
              fontWeight:'600'}}> In his current role for Parintek, he drives the IP
                    roadmap and business of the company with a
                    vision to build IP culture in India. Rajesh has managed intellectual property
                    related project execution and delivery for
                    multiple fortune 500 clients.</p>
            
                <p style={{
              textAlign:'justify',
              color:'#000',
              fontStyle:'italic',
              fontWeight:'600'}}> He was
                    instrumental in supporting multiple
                    corporations with patent sale, patent litigation
                    & licensing, patent drafting, office action
                    response, prior art search and analytics
                    projects. He has managed operations
                    for a leading IP service provider for supporting
                    clients (including Law firms, corporate and
                    academia) across geography.</p>
                <p style={{
              textAlign:'justify',
              color:'#000',
              fontStyle:'italic',
              fontWeight:'600'}}>He has successfully designed and executed
                    multiple IP service optimization projects which
                    resulted in huge cost savings for his client as
                    well as for his firm.</p>
            </div>
        </div>



    </div>



                  
                
            </div>
         

          
        </div>
    </div>
    <div class="col-md-5">
        <div class="col-md-12" style={{background:'lightseagreen',
                                        padding:'6%',
                                        textAlign:'center',
                                        marginLeft:'15%',
                                        marginBottom:'5%',
                                        width:'80%'}} >
            <h5 style={{color:'#fff',
                        fontSize:'24px',
                        fontFamily:'cursive',
                        }}>
Register for the Webinar <br/></h5>

<ul style={{color:'#fff',
            lineHeight:'2',
            fontWeight:'600',
            listStyleType:'none',
            fontSize:'16px',
            marginLeft:'-12%',
            letterSpacing:'1px',
            color:'lightseagreen',
            margin:'0%',
            background:'#fff',
            padding:'0%'
                        }}>
                    <li>Date: Wednesday, Nov 11, 2020</li>
                    <li>Time: 6 PM (IST)</li>
                    <li>Duration: 1 Hour</li>
</ul>


<hr style={{borderTop:'0.5px solid #fff'}} />
           
<br/>           
            <div class="row" style={{fontSize:'14px'}}>
                <div class="col-sm-12 col-md-12 col-lg-12">
                <form onSubmit={this.handleSubmit}>
                             
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group mb-2">
                            <input type="text" name="first_name"  style={{borderRadius:'0px',padding:'25px'}} 
                            required class="form-control" 
                            required placeholder="Your First Name"
                            onChange={this.changeHandler}/>
                           

                        </div>
                        <div class="form-group mb-2">
                            <input type="text" name="last_name" style={{borderRadius:'0px',padding:'25px'}} 
                            required class="form-control" 
                            required placeholder="Your Last Name"
                            onChange={this.changeHandler}/>
                           

                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="form-group mb-2">
                            <input type="text" name="email"  style={{borderRadius:'0px',padding:'25px'}} 
                            required class="form-control" 
                            required placeholder="Your Email Address"
                            onChange={this.changeHandler}/>
                           
                        </div>
                    </div>
                </div>
                <div class="form-group mb-2">
                    <input type="text" name="company_name" style={{borderRadius:'0px',padding:'25px'}} 
                    class="form-control"  placeholder="Your Company Name (Optional)"
                    onChange={this.changeHandler}/>
                   

                </div>
                 {/* <div class="form-group form-primary">
                 
                    <select class="form-control" name="currency">
                    <option value="USD">Select Your Payment Currency</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    </select>

                </div>
                <div class="form-group form-primary">
                    <span class="form-bar">No of sessions available  5</span>
                    <select class="form-control select2" name="session_booked">
                    <option value="null">Book One-on-One Session </option>
                  
                                        <option value="1">Yes</option>
                    <option value="0">No</option>
                                        
                  
                    </select>

                </div>
                 <div class="form-group form-primary">
                    <h5> Webinar Fees: <span>$0 / INR 0</span> </h5>
                    
                    
                  

                    <span class="form-bar"></span>

                </div>   */}
                
<hr  style={{borderTop:'0.5px solid #fff'}} />

{/* <p style={{fontWeight:'400',
           textAlign:'justify',
           color:'#fff',
           }}>Further, five participants can have an option to book a one-on-one session with the speaker. The session needs to be booked at the time of registration.</p> */}
                
                <div class="row">
                    <div class="col-sm-12" >
                        <div class="form-group form-primary">
                            <button type="submit"  style={{background: 'var(--white)',
  border: 'var(--cyan)',color:'#20b2aa',
  borderRadius:'70px',marginBottom:'30px'}} class="btn btn-primary col-md-12 appao-btn appao-btn2">Book Now
  {this.state.formError ? (<Alert/>) : (
                                        <span></span>
                                    )}</button>

                        </div>
                    </div>
                </div>

            </form>
                </div>
               
        
                
            </div>
         

          
        </div>
    </div>
</div>
  
</div>




<footer className="footer">
                <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-12  col-lg-3">
                <h5 className="col_white pt2">Parintek Innovations</h5>

                <p className="mb10">Parintek Innovation Inc. is a global organization that serves world class IP 
                consulting to leading Businesses, Universities & Institutions, non-profit organization and Governments.
                <br/><a href="https://www.parintek.com/about.php"  style={{color: 'Yellow', textDecoration: 'none'}}> Read more</a></p>


                </div>


                <div className=" col-sm-12 col-md col-6 col">
                <h5 className="col_white pt2">Useful Links</h5>

                <ul className="footer_ul">
                <li><a href="https://marketplace.parintekinnovation.com/">About</a></li>
                <li><a href="https://marketplace.parintekinnovation.com/">Blog</a></li>
                <li><a href="https://marketplace.parintekinnovation.com/">Career</a></li>
                <li><a href="https://marketplace.parintekinnovation.com/">IP News</a></li>
                </ul>

                </div>


                <div className=" col-sm-12 col-md  col-6 col">
                <h5 className="col_white pt2">Quick Links</h5>
                <ul className="footer_ul">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Site Map</a></li>
                <li><a href="#">FAQ</a></li>

                </ul>

                </div>


                <div className=" col-sm-12 col-md  col-6 col">
                <h5 className="col_white pt2">US</h5>

                <ul className="footer_ul2">
                <li><i class="fa fa-map-marker fleft padding-right"></i><p> Parintek Innovations Inc. 
                                            764 Southcross Dr W, 
                                            #202, Burnsville, MN 
                                            55306, USA</p></li>
                <li><i class="fa fa-phone fleft padding-right"></i><p>+1-202-318-0199</p></li>
                <li><i class="fa fa-envelope fleft padding-right"></i><p><a href="mailto:	info@parintek.com"  style={{color: 'white', textDecoration: 'none'}} >	info@parintek.com</a></p></li>
                </ul>

                </div>

                <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="col_white pt2">India</h5>


                <ul className="footer_ul2">
                <li><i class="fa fa-map-marker fleft padding-right"></i><p> UNIT 501A , Tower B, 
                                            Ithum IT Park, A-40, 
                                            sector 62, NOIDA , UP 
                                            Noida, Uttar Pradesh - 
                                            201309.</p></li>
                <li><i class="fa fa-phone fleft padding-right"></i><p>+918076510108</p></li>
                <li><i class="fa fa-envelope fleft padding-right"></i><p><a href="mailto:	info@parintek.com"  style={{color: 'white', textDecoration: 'none'}} >	info@parintek.com</a></p></li>
                </ul>

                </div>


                </div>
                </div>




                <div className="container mt-5">
                <p className="text-center">©2021 Parintek Innovations. All rights reserved | Developed by Parintek Inc.</p>

                <ul className="social_footer_ul">
                <li><a href="https://www.facebook.com/parintekinno/?modal=admin_todo_tour" target="_blank" rel="noreferrer"><i class="fa fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/ParintekIn"><i class="fa fa-twitter" target="_blank" rel="noreferrer"></i></a></li>
                <li><a href="https://www.linkedin.com/company/Parintek" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a></li>
            
                </ul>

                </div>
                
                </footer>
</body>
  </>
   )
          }
    }

    export default Webinar;