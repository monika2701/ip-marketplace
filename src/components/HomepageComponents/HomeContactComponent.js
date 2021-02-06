import React,{Component} from 'react';
import axios from 'axios';
import Alert from  '../../extras/alert';


class HomeContact extends Component {
  constructor(props){
    super(props)

    this.state={
      name: '',
      email: '',
      mobile: '',
      subject:'This is a test subject',
      message: '',
      formError: false
      
    }
    this.baseState = this.state 
  }
  
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    
    console.log(this.state)
    axios
      .post('https://marketplace.parintekinnovation.com/api/contact.php?method=ContactUs',this.state)
      
      .then(response => {
        console.log(response)
        this.setState(this.baseState)
        this.setState({formError: true});
        
      })
      .catch(error => {
        console.log(error)
      })

  }
    
  render(){
    const{ name,email,mobile,subject,message } = this.state
   return (
   
      <div className="container" style={{paddingBottom:'4px'}}>
          <h3 style={{marginTop:'20px'}}><center>Send Us Your Details to get a Free Call Back !</center></h3>
          <p><center>Call Us @+91-8076510108 and get Patent Consultation FREE</center></p>
          
            <div className="row">
                <div className="col-md-6">
                    <img src="assets/8.png" style={{position:'relative',top:'-8px',textAlign:'center'}} alt=""/> 
                </div>

                <div className="col-md-6">
                  <div id="contact-form">

                    <form onSubmit={this.submitHandler}>
                        <div className="form-group ">
                          <input type="text" 
                                 class="form-control" 
                                 name="name" 
                                 value={name}
                                 onChange={this.changeHandler}
                                 placeholder="Name" required/>
                          <label class="form-label" for="name">Name</label>
                        </div>

                        <div className="form-group ">
                          <input type="text" 
                                 class="form-control" 
                                 name="email" 
                                 value={email}
                                 onChange={this.changeHandler}
                                 placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                          <label class="form-label" for="surname">Email</label>
                        </div>

                        <div className="form-group ">
                          <input type="tel" 
                                 class="form-control" 
                                 name="mobile" 
                                 value={mobile}
                                 onChange={this.changeHandler}
                                 placeholder="Contact Number" pattern="[0-9]{10}" required/> 
                          <label class="form-label" for="surname">Contact Number</label>
                        </div>

                       {/*  <div className="form-group ">
                          <textarea className="form-control textarea" 
                                    name="subject" 
                                    rows="1" 
                                    value={subject}
                                    onChange={this.changeHandler}
                                    placeholder="Subject"></textarea>
                          <label class="form-label" for="message">Subject</label>
                        </div>
 */}
                        <div className="form-group ">
                          <textarea className="form-control textarea" 
                                    name="message" 
                                    rows="1" 
                                    value={message}
                                    onChange={this.changeHandler}
                                    placeholder="Write a message"></textarea>
                          <label class="form-label" for="message">Write a message</label>
                        </div>

                        <button type="submit" value="submit" class="btn btn-blue text-center" >Submit 
                        {this.state.formError ? (
                                       <Alert/>
                                    ) : (
                                        <span></span>
                                    )}</button>
                       
                    </form>
            </div>
            
        </div>
        
      </div>
      
    </div>
   


   )
}
}

export default HomeContact;