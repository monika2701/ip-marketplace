import React from 'react';
import { Link } from 'react-router-dom';

function SignUp(props) {
    
   return (
	

<div class="signup-form mt-5">
    <form>
		<h2><center>Sign Up</center></h2>
	
        <div class="form-group">
        <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text"><i class="fa fa-user"></i></div>
        </div>
        <input type="text" class="form-control" id="Username" placeholder="Username" required/>
      </div>
        </div>
        <div class="form-group">
        <div class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text" style={{padding:'9px'}}><i class="fa fa-envelope"></i></div>
        </div>
        <input type="email" class="form-control" name="email" placeholder="Email Address" required="required"/>
      </div>	
    </div>
		<div class="form-group">
			<div class="input-group mb-4">
				<div class="input-group-prepend">
                    <div class="input-group-text"><i class="fa fa-lock"></i></div>
			</div>
            <input type="text" class="form-control" name="password" placeholder="Password" required="required"/>
        </div>
        </div>
		<div class="form-group">
        <div class="input-group mb-4">
				<div class="input-group-prepend">
                    <div class="input-group-text"><i class="fa fa-lock"></i></div>
			</div>
            <input type="text" class="form-control" name="password" placeholder="Confirm Password" required="required"/>
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
    export default SignUp;
