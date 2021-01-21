import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state={
      name: '',
      email_id: '',
      password: ''
     
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('https://marketplace.parintekinnovation.com/api/user.php?method=Registration',this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
 
  }
   render(){
    const{ name,email_id,password } = this.state
     return (
    
	

<div class="signup-form mt-5">
<form onSubmit={this.submitHandler}>
		<h2><center>Sign Up</center></h2>
	
        <div class="form-group">
        <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fa fa-user"></i></div>
        </div>
        <input type="text" 
               class="form-control" 
               name="name"
               value={name}
               onChange={this.changeHandler}
               placeholder="Username" required/>
        </div>
        </div>

        <div class="form-group">
        <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text" style={{padding:'9px'}}><i class="fa fa-envelope"></i></div>
        </div>
        <input type="email" 
               class="form-control" 
               name="email_id" 
               value={email_id}
               onChange={this.changeHandler}
               placeholder="Email Address" required="required"/>
      </div>	
    </div>

		<div class="form-group">
			<div class="input-group mb-4">
				<div class="input-group-prepend">
          <div class="input-group-text"><i class="fa fa-lock"></i></div>
			  </div>
        <input type="password" 
               class="form-control" 
               name="password"
               value={password}
               onChange={this.changeHandler} 
               placeholder="Password" required="required"/>
        </div>
        </div>

		<div class="form-group">
        <div class="input-group mb-4">
				<div class="input-group-prepend">
          <div class="input-group-text"><i class="fa fa-lock"></i></div>
			  </div>
        <input type="password" 
               class="form-control" 
               name="password" 
               placeholder="Confirm Password" required="required"/>
        </div>
        </div>
        
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
	<div class="text-center">Already have an account?<Link to="/signin">Login here</Link></div>
</div>

)
    }
  }

   
export default SignUp;
