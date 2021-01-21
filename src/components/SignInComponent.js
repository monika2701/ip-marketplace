import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignIn extends Component {
    constructor(props){
        super(props)
    
        this.state={
          username: '',
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
          .post('https://marketplace.parintekinnovation.com/api/user.php?method=login',this.state)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
     
      }
   
   
  render(){
    const{ username,password } = this.state
   return (
    
	<div class="login-form mt-3 pt-5">
     <form onSubmit={this.submitHandler}>
        <h2 class="text-center">Sign in</h2>		
        <div class="text-center social-btn">
            <a href="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
			<a href="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
        </div>


        <div class="form-group">
		<div class="input-group mt-3 mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fa fa-user"></i></div>
        </div>
        <input type="text" 
               class="form-control" 
               name="username"
               value={username}
               onChange={this.changeHandler}
               placeholder="Username" required/>
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
               placeholder="Password" required/>
      </div>
           
        </div>        
        <div class="form-group mb-4">
            <button type="submit" class="btn btn-success btn-block login-btn">Sign in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            
        </div>  
        
    </form>
    <div class="hint-text small">Don't have an account?<Link to="/signup">Register Now!</Link></div>
</div>
        
        )
    }
}
    export default SignIn;