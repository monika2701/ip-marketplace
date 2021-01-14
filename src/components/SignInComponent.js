import React from 'react';
import { Link } from 'react-router-dom';

function SignIn(props) {
    
   return (
    
	<div class="login-form mt-3 pt-5">
    <form>
        <h2 class="text-center">Sign in</h2>		
        <div class="text-center social-btn">
            <a href="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
			<a href="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
        </div>
	{/* 	<div class="or-seperator"><i>or</i></div> */}

        <div class="form-group">
		<div class="input-group mt-3 mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fa fa-user"></i></div>
        </div>
        <input type="text" class="form-control" id="Username" placeholder="Username" required/>
      </div>
        </div>

		<div class="form-group">
		<div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fa fa-lock"></i></div>
        </div>
		<input type="password" class="form-control" name="password" placeholder="Password" required/>
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
    export default SignIn;