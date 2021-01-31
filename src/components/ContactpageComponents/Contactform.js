import React,{Component} from 'react';
import axios from 'axios';


class ContactForm extends Component {
  constructor(props){
    super(props)

    this.state={
      name: '',
      email: '',
      contact: '',
      subject: '',
      message: ''
    }
  }


  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('',this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

  }

  render(){
    const{ name,email,contact,subject,message } = this.state
    return(
    <>
    
    <div style={{backgroundColor: '#f6f6f6',paddingBottom:'20px'}}>
    <div className="container" style={{paddingBottom:'12px'}}>
        <h2><center>We would love to hear from you!</center></h2>
          <div className="row">
         
            <div className="col-md-6 mt-1">

            <form onSubmit={this.submitHandler}>

                <div className="form-group mb-1">
                  <input type="text" 
                         class="form-control" 
                         name="name" 
                         value={name}
                         onChange={this.changeHandler}
                         placeholder=" Your Name" required/>
                </div>

                <div className="form-group mb-1">
                  <input type="email" 
                         class="form-control"
                         name="email" 
                         value={email}
                         onChange={this.changeHandler}
                         placeholder="Your Email" required/>
                </div>

                <div className="form-group mb-1">
                <input type="number" 
                       class="form-control" 
                       name="contact" 
                       value={contact}
                       onChange={this.changeHandler}
                       placeholder="Your Contact" required/>
                </div>

                <div className="form-group mb-1">
                  <input type="text" 
                         class="form-control" 
                         name="subject"
                         value={subject}
                         onChange={this.changeHandler} 
                         placeholder="Subject" required/>
                </div>

                <div className="form-group mb-2">
                  <textarea class="form-control"
                            name="message"
                            value={message}
                            onChange={this.changeHandler}  
                            placeholder="Message" 
                            rows="6" required></textarea>
                </div>

                <button type="submit" class="button1">Send Message</button>
              </form>
            </div> 
            <div className="col-md-6">
            <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2834.056896744269!2d-93.28908100000001!3d44.738856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d3cdfa52cc32ed0!2sParintek%20Innovation%20Inc!5e0!3m2!1sen!2sin!4v1611223236675!5m2!1sen!2sin&z=15"
                      style={{width:"530px", height:"350px",border:"0"}} frameBorder="0" allowFullScreen=""></iframe>
            </div>
          </div> 
        </div>
       
      </div>
     
</>
)
}
}

export default ContactForm;