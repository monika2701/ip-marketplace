import React,{Component} from 'react';

class ServiceEnquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    alert('You have submitted the form.')
    const data = new FormData(event.target);
    
    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  } 


  render(){
    return(
    <>
    
<div class="enquiry">
<h2>Service Enquiry Form</h2>
</div>
<div class="container">
	
  <form>
  <div class="form-row mb-5">
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

  <div class="form-row mb-5">
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
 
  <div class="form-group mb-2">
    <label id="design">Message<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" rows="3" required></textarea>
  </div>
  <div class="form-group mb-4">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="termsChkbx"/>
      <label id="design" for="gridCheck">
        I Agree to Terms and Conditions<span class="star">*</span>
      </label>
    </div>
  </div>
  <button type="submit" class="button1" id="sub1" disabled="disabled">Submit</button>
  
  
</form>
</div>

   
</>
)
}
}

export default ServiceEnquiry;