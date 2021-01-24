import React,{Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  constructor(props){
    super(props)

    this.state={
      name: '',
      email_id: '',
      password: '',
      confirmPassword:''
    /*   redirect:false */
     
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value })
  }

  submitHandler = e => {
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
        alert("Passwords don't match");
    } 
    else {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('https://marketplace.parintekinnovation.com/api/user.php?method=Registration',this.state)
      .then(response => {
        console.log(response)
      })
    /*   .then(data => {
        if(data.statusCode == 200){
            this.props.history.push("/");
            console.log('Successfully Login');
      }
    }) */
      .catch(error => {
        console.log(error)
      })
      this.setState({redirect: true});
    }
  }
 
   render(){
   
    const{ name,email_id,password,confirmPassword } = this.state
   /*  const { redirect } = this.state.redirect;
    if (redirect) {
      return <Redirect to='/home'/>;
    } */
     
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
                    placeholder="Password" pattern=".{8,}"   required title="8 characters minimum"/>
              </div>
              </div>

          <div class="form-group">
              <div class="input-group mb-4">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fa fa-lock"></i></div>
              </div>
              <input type="password" 
                    class="form-control" 
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.changeHandler} 
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
