import React,{Component}  from 'react';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Alert from '../extras/alert';


class ServiceEnquiry extends Component {
  constructor(props){
    super(props)

    this.state= {
      name:localStorage.getItem('username'),
      email:localStorage.getItem('email'),
      profession: '',
      purpose_of_enquiry: '',
      organisation:'',
      mobile: '',
      message:'',
      formError: false
      
    }
    this.baseState = this.state 
  }
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('https://marketplace.parintekinnovation.com/api/serviceenquiry.php?method=ServiceEnquiry',this.state)
      .then(response => {
        console.log(response)
        this.setState(this.baseState)
        this.setState({formError: true});
      })
      .catch(error => {
        console.log(error)
      })

  }
    
  
  componentDidMount(){
    $(function() {
      $('#termsChkbx').on("click",function() {
        if ($(this).is(':checked')) {
          $('#sub1').removeAttr('disabled');
        } else {
          $('#sub1').attr('disabled', 'disabled');
        }
      });
    });
  }


  render(){
    
    if(!localStorage.getItem('token')) {
      return <Redirect to='/login'/>
    }
    const{ profession,purpose_of_enquiry,organisation,mobile,message } = this.state
    return(
      
    <>
    
<div class="enquiry">
<h2>Enter Your Information</h2> 
</div>
<div class="container mb-5 pb-5">
	
<form onSubmit={this.submitHandler}>
  <div class="form-row mb-5">
    <div class="form-group col-md-5">
      <label id="design">Who are you?(Profession)<span class="star">*</span></label>
       <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" 
        name="profession" 
        value={profession}
        onChange={this.changeHandler} required>
        <option value="">Choose Option</option>
        <option value="1">Student</option>
        <option value="2">Researcher</option>
        <option value="3">StartUp</option>
		<option value="4">Corporates</option>
      </select>
    </div>
	<div class="col-md-2"></div>
    <div class="form-group col-md-5">
      <label id="design">Purpose of Enquiry<span class="star">*</span></label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" 
       name="purpose_of_enquiry" 
       value={purpose_of_enquiry}
       onChange={this.changeHandler} required>
        <option value="">Choose Option</option>
        <option value="1">Idea Evaluation</option>
        <option value="2">Idea Patent Filing</option>
        <option value="3">Idea Consultation</option>
        <option value="4">Career Support</option>
        <option value="5">Idea Funding</option>
        <option value="6">Patent Analyst</option>
        <option value="7">Pre Filing Search</option>
        <option value="8">Full IP Service</option>
        <option value="9">Idea Management Portal</option>
        <option value="10">Office Action</option>
        <option value="11">Copyrights</option>
        <option value="12">Trademark</option>
        <option value="13">Business Incorporation</option>
      </select>
    </div>
  </div>

  <div class="form-row mb-5">
    <div class="form-group col-md-5">
      <label id="design">Name of your Company/Organisation/Institute<span class="star">*</span></label>
      <input type="text" class="form-control" 
                         name="organisation"
                         value={organisation}
                         onChange={this.changeHandler} placeholder="Name of Your Institute" required/>
    </div>
	<div class="col-md-2"></div>
    <div class="form-group col-md-5">
      <label id="design">What if we want to contact you over a call<span class="star">*</span></label>
      <input type="number" class="form-control" 
                           name="mobile" 
                           value={mobile}
                           onChange={this.changeHandler} placeholder="Contact No to get enquiry" required/>
    </div>
  </div>
 
  
  

  <div class="form-group mb-5">
    <label id="design">Message<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" 
                                    name="message" 
                                    value={message}
                                    onChange={this.changeHandler} placeholder="Message" rows="3" required></textarea>
  </div>
  

  <div class="form-group mb-2">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="termsChkbx"/>
      <label id="design" for="gridCheck">
        I Agree to Terms and Conditions<span class="star">*</span>
      </label>
    </div>
  </div>
  <button type="submit" class="button2" id="sub1" disabled="disabled">Confidential Submit
  {this.state.formError ? (
                                       <Alert/>
                                    ) : (
                                        <span></span>
                                    )}</button>
 
  
</form>
</div>

   
</>
)
}
}


export default ServiceEnquiry;