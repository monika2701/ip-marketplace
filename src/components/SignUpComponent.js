import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';


export default class SignUp extends Component {

    state = {
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
        redirect: false,
        authError: false,
        isLoading: false,
        
    };
    handleNameChange = event => {
      this.setState({name: event.target.value});
  };

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };
    handlePwdChange = event => {
        this.setState({password: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const url = 'https://marketplace.parintekinnovation.com/api/user.php?method=Registration';
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
       
        let bodyFormData = new FormData();
        bodyFormData.set('name', name);
        bodyFormData.set('email', email);
        bodyFormData.set('password', password);
        var object = {};
        bodyFormData.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
      
        axios.post(url, json,{
          headers:{
            'Content-Type':'application/json'
          }
        })
        
            .then(result => {
             console.log(result.data);
             var js=result.data.Response;
                if (result.data) {
                  console.log(js); 
                  
                    localStorage.setItem('token', js.session_token);
                    
                    this.setState({redirect: true, isLoading: false});
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('username', JSON.stringify(js.full_name));
                }
            })
            .catch(error => {
                console.log(error);
                this.setState({authError: true, isLoading: false});
            });
    };

   
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home'/>
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            
            <div className="container">
              
              <div class="signup-form mt-5">
                
                        <form onSubmit={this.handleSubmit}>
                        <h2 class="text-center">Register</h2>		
                        <div className="form-group">
                            <div class="input-group mb-4">
                            <div class="input-group-prepend">
                              <div class="input-group-text"><i class="fa fa-user"></i></div>
                            </div>
                                                  
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputName" placeholder="Name" type="text" name="name" onChange={this.handleNameChange} autoFocus required/>
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid User Name.
                                    </div>
                                
                            </div>
                            <div className="form-group">
                            <div class="input-group mb-4">
                            <div class="input-group-prepend">
                              <div class="input-group-text" style={{padding:'9px'}}><i class="fa fa-envelope"></i></div>
                            </div>
                                                  
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputEmail" placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid Email.
                                    </div>
                                
                            </div>
                            <div className="form-group">
                            <div class="input-group mb-4">
                                <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-lock"></i></div>
                                </div>
                                    <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="Password" name="password" onChange={this.handlePwdChange} required/>
                                </div>    
                                    <div className="invalid-feedback">
                                        Please provide a valid Password.
                                    </div>
                                
                            </div>
                            <div className="form-group">
                            <div class="input-group mb-4">
                                <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-lock"></i></div>
                                </div>
                                    <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="Confirm Password" name="confirmPassword" onChange={this.handlePwdChange} required/>
                                </div>    
                                    <div className="invalid-feedback">
                                        Please provide a valid Password.
                                    </div>
                                
                            </div>
                           
                           
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Sign Up &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                           
                        </form>
                        <div class="text-center">Already have an account?<Link to="/login">Login here</Link></div>
                    
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}
