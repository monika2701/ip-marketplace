import React,{Component} from 'react';
import './Webinar.css';
import axios from 'axios';
import Alert from  '../../extras/alert';

class WebinarForm extends Component {
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
                         </>
   )
          }
    }

    export default WebinarForm;