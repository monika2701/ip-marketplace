import React,{Component}  from 'react';
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Alert from  '../../extras/alert';



class StudentEvaluation extends Component {
  constructor(props){
    super(props)

    this.state={
      name: localStorage.getItem('username'),
      email: localStorage.getItem('email'),
      user_ref_no :localStorage.getItem('user_ref_no'),
      profession: '',
      purpose_of_enquiry: '',
      company_institute:'',
      mobile: '',
      benefit_of_idea:'',
      key_feature:'',
      idea_detail:'',
      message:'',
      attachment: '',
      formError: false
    }
  }
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }
  handleFileChange = (e) => {
    this.setState({ attachment: e.target.files[0] })
}

  submitHandler = e => {
    e.preventDefault();
    /* console.warn(this.state.attachment); */
    let url = "https://marketPlace.parintekinnovation.com/api/idea_submit.php";

    const { name,email,user_ref_no,profession,purpose_of_enquiry,company_institute,mobile,benefit_of_idea,
            key_feature,idea_detail,message,attachment } = this.state
    
    let bodyFormData = new FormData() ;
    bodyFormData.append('attachment', this.state.attachment);
    bodyFormData.set('name',name);
    bodyFormData.set('email',email);
    bodyFormData.set('user_ref_no',user_ref_no);
    bodyFormData.set('profession', profession);
    bodyFormData.set('purpose_of_enquiry', purpose_of_enquiry);
    bodyFormData.set('company_institute',company_institute);
    bodyFormData.set('mobile', mobile);
    bodyFormData.set('benefit_of_idea',benefit_of_idea);
    bodyFormData.set('key_feature',key_feature);
    bodyFormData.set('idea_detail',idea_detail);
    bodyFormData.set('message', message);

    /*   console.log(bodyFormData); */
    
    axios.post(url, bodyFormData, {
       headers:{
        'content-type': 'multipart/form-data'

     }
    })
    .then(result => { 
      console.log(result.data);
      this.setState({formError: true});
    })
    .catch(error => {
      console.log(error);
      
  });
    

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
                         name="company_institute" 
                         /* value="testing" */
                         onChange={this.changeHandler} placeholder="Name of Your Institute" required/>
    </div>
	<div class="col-md-2"></div>
    <div class="form-group col-md-5">
      <label id="design">What if we want to contact you over a call<span class="star">*</span></label>
      <input type="number" class="form-control" 
                           name="mobile" 
                           /* value="7091925723" */
                           onChange={this.changeHandler} placeholder="Contact No to get enquiry" required/>
    </div>
  </div>
  <div class="form-group mb-5">
    <label id="design">What purpose your Idea solve<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" 
                                   name="benefit_of_idea" 
                                  /*  value="testing" */
                                   onChange={this.changeHandler} placeholder="Benefit Of Idea" rows="3" required></textarea>
  </div>
  <div class="form-group mb-5">
    <label id="design">What Makes Idea Unique<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" 
                                    name="key_feature" 
                                  /*   value="testing" */
                                    onChange={this.changeHandler} placeholder="Key Feature of Idea" rows="3" required></textarea>
  </div>
  <div class="form-group mb-5">
    <label id="design">Introduce your Idea<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" 
                                   name="idea_detail" 
                                 /*   value="testing" */
                                   onChange={this.changeHandler} placeholder="Idea details" rows="3" required></textarea>
  </div>
  
  

  <div class="form-group mb-5">
    <label id="design">Message<span class="star">*</span></label>
    <textarea class="form-control" id="FormControlTextarea" 
                                    name="message" 
                                   /*  value="testing" */
                                    onChange={this.changeHandler} placeholder="Message" rows="3" required></textarea>
  </div>
  <div class="form-group mb-5">
    <label id="design">File input</label>
    <input type="file" class="form-control-file" 
                       name="attachment"
                       onChange={this.handleFileChange}/>
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
  {this.state.formError ? ( <Alert/>) : (<span></span>
                                    )}</button>
 
  
</form>
</div>

   
</>
)
}
}


export default StudentEvaluation;