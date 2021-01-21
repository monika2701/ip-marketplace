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
    <div className="container">
        <h2><center>We would love to hear from you!</center></h2>
          <div className="row">
          <div className="col-md-3"></div>
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
            <div className="col-md-3"></div>
          </div> 
        </div>
       
      </div>
     
</>
)
}
}

export default ContactForm;