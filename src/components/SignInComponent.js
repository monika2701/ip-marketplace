import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import PostData from './PostData';


class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
    username: '',
    password: '',
    redirect:false
    }
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    }
    
     
    login() {
    if(this.state.username && this.state.password){
    PostData('login',this.state).then((result) => {
    let responseJSON = result;
    if(responseJSON.userData){
    sessionStorage.setItem('userData',responseJSON);
    this.setState({redirect: true});
    }
    else{
      console.log("Login error");
    }
    });
    }
  }
    
    
    
    onChange(e){
    this.setState({[e.target.name]:e.target.value});
    }
   
  render(){
    if (this.state.redirect || sessionStorage.getItem('userData')){
      return (<Redirect to={'/home'}/>)
      }
      
   return (
    
	<div class="login-form mt-3 pt-5">
     <form>
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
               onChange={this.onChange}
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
               onChange={this.onChange}
               placeholder="Password" pattern=".{8,}"   required title="8 characters minimum"/>
      </div>
           
        </div>        
        <div class="form-group mb-4">
            <button type="submit" class="btn btn-success btn-block login-btn" onClick={this.login}>Sign in</button>
        </div>
        <div class="clearfix">
            <label class="pull-left checkbox-inline"><input 
            type="checkbox" /> Remember me</label>
            
        </div>  
        
    </form>
    <div class="hint-text small">Don't have an account?<Link to="/signup">Register Now!</Link></div>
</div>
        
        )
    }
}
    export default SignIn;