import React,{Component}  from 'react';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';



class ServiceEnquiry extends Component {
  
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
    return(
    <>
    
<div class="enquiry">
<h2>Enter Your Information</h2> 
</div>
<div class="container mb-5 pb-5">
	
  <form>
  <div class="form-row mb-3">
    <div class="form-group col-md-5">
      <label id="design">Who are you?(Profession)<span class="star">*</span></label>
       <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" required>
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
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" required>
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

  <div class="form-row mb-3">
    <div class="form-group col-md-5">
      <label id="design">Name of your Company/Organisation/Institute<span class="star">*</span></label>
      <input type="text" class="form-control" placeholder="Name of Your Institute" required/>
    </div>
	<div class="col-md-2"></div>
    <div class="form-group col-md-5">
      <label id="design">What if we want to contact you over a call<span class="star">*</span></label>
      <input type="number" class="form-control" placeholder="Contact No to get enquiry" required/>
    </div>
  </div>
  <div class="form-group mb-3">
    <label id="design">What purpose your Idea solve<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" placeholder="Benefit Of Idea" rows="3" required></textarea>
  </div>
  <div class="form-group mb-3">
    <label id="design">What Makes Idea Unique<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" placeholder="Key Feature of Idea" rows="3" required></textarea>
  </div>
  <div class="form-group mb-3">
    <label id="design">Introduce your Idea<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" placeholder="Idea details" rows="3" required></textarea>
  </div>
  <div class="form-group mb-3">
    <label id="design">Message<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" placeholder="Message" rows="3" required></textarea>
  </div>
  <div class="form-group mb-2">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="termsChkbx"/>
      <label id="design" for="gridCheck">
        I Agree to Terms and Conditions<span class="star">*</span>
      </label>
    </div>
  </div>
  <button type="submit" class="button2" id="sub1" disabled="disabled">Confidential Submit</button>
 
  
</form>
</div>

   
</>
)
}
}


export default ServiceEnquiry;