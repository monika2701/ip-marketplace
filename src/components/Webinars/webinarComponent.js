import React,{Component} from 'react';
import axios from 'axios';
import './Webinar.css';
import WebinarForm from './webinarForm';


class Webinar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        webinar_id : localStorage.getItem('WebinarID'),
      
    };
}

componentDidMount() {
    
    axios.post('https://marketplace.parintekinnovation.com/api/webinar.php?method=webinarInfo', this.state)

        .then(result => { 
          console.log(result.data);
          var js = result.data.Response;
         if (result.data) {
          this.setState({ webinar_name: js.webinar_name});
          this.setState({ about_speaker: js.about_speaker});
          this.setState({ webinar_date: js.webinar_date});
          this.setState({ webinar_duration: js.webinar_duration});
          this.setState({ webinar_time: js.webinar_time});
          this.setState({ speaker_name: js.speaker_name});
          this.setState({ speaker_photo: js.speaker_photo});
          this.setState({ speaker_summary: js.speaker_summary});
          this.setState({ classipi: js.is_classipi});
          this.setState({ about_webinar: js.about_webinar});
          localStorage.setItem('fee',js.is_paid);
          localStorage.setItem('webinarName',js.webinar_name);
        }
      })
        .catch(error => {
          console.log(error);
          
        });
    }
  
 
 render(){
   
 

 const { webinar_name,about_speaker,webinar_date,webinar_time,webinar_duration,
          speaker_name,speaker_photo,speaker_summary,classipi,about_webinar } = this.state;

   return (
    <>
    <body>

    <div class="hs-webinar-hero">
      <div class="hs-webinar-hero__container">
        <div class="hs-webinar-hero__top">
          <div class="hs-webinar-hero__top-left">
            <div class="hs-webinar-hero__logo"><a href="#"><img src="assets/logo1.png" /></a></div>
          </div>
        </div> 
      </div>
    </div>

    <section id="webinarHome">
      <div class="home_text"> 
        <h6 style={{ fontWeight: 'bolder',fontSize:'2.5em'}} dangerouslySetInnerHTML={{ __html: webinar_name }}></h6>
      </div>
    </section>



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
          
            <h5 style={{fontSize: "20px",
                        marginLeft: '4%',
                        color: '#000',
                        fontFamily: '"Open Sans",Arial,sans-serif',
                        fontWeight: '500'}} dangerouslySetInnerHTML={{ __html: about_webinar }}></h5>


                <div class="row" style={{fontSize: "14px",
                        letterSpacing: '1px'}}>
                  {/*  <p>Further, five
                        participants can have an option to block
                        a 10 minutes one on one session with
                        speaker post presentation. The one on
                        one session needs to booked at the time
                        of registration for Q&A session</p> */}


                      
                  
        <div class="section row col-md-12" style={{fontSize: "14px",margin: '0 auto',padding: '10px'}}>
            <div class="row"> 
                <div class="col-md-12 col-sm-12" style={{paddingTop:'2%'}}>
                <h5 style={{fontSize: "26px",
                            margin: '2%',
                            color:'05053e',
                            letterSpacing:'2px',
                            fontFamily:'cursive',
                            fontWeight:'400',}}>About the Speaker</h5>

                <div style={{borderRadius:'50%',
                              backgroundColor:'lightseagreen',
                              border:'1px solid var(--white)',
                              height:'34% !important' }}> <img class="img" style={{borderRadius:'50%',
                                                    width:'39%',
                                                    border:'1px solid #37869d',
                                                    height:'34% !important'}}src={speaker_photo} />
                <div style={{width:'50%',
                      position:'relative',
                      left:'2%',
                      top:'40px',
                      display:'inline-block',}}>

                    <h6 style={{color:'#fff',
                    fontWeight:'700',
                    fontSize:'27px'}}>{speaker_name}</h6>

                  <h6  style={{color:'#fff'}}dangerouslySetInnerHTML={{ __html: speaker_summary }}></h6>
            </div>  
          </div>
              <p style={{padding:'4px',
                  textAlign:'justify',
                  color:'#000',
                  fontStyle:'italic',
                  marginTop:'4%',
                  fontWeight:'500'}}dangerouslySetInnerHTML={{ __html: about_speaker }}></p>
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
                            }}>Register for the Webinar <br/></h5>

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
                        <li>Date: {webinar_date}</li>
                        <li>Time: {webinar_time}</li>
                        <li>Duration: {webinar_duration}</li>
          </ul>


    <hr style={{borderTop:'0.5px solid #fff'}} />
              
    <br/>           
                <div class="row" style={{fontSize:'14px'}}>
                    <div class="col-sm-12 col-md-12 col-lg-12">
                  <WebinarForm/>
                    </div>  
                </div>
            </div>


            {this.state.classipi === "0" ? (
            <span></span>
      ) : (
        <img src="https://pbs.twimg.com/profile_images/1296747757185589248/-qCI0Psh_400x400.jpg"/>
      )}


      
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