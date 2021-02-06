import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';


export default class Login extends Component {

    state = {
        email: '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
        
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
        const url = 'https://marketplace.parintekinnovation.com/api/user.php?method=login';
        const email = this.state.email;
        const password = this.state.password;
        let bodyFormData = new FormData();
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
                    localStorage.setItem('email',JSON.stringify(js.email));
                    localStorage.setItem('user_ref_no',JSON.stringify(js.ref_no));
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
              
              <div class="login-form mt-3 pt-5">
                
                        <form onSubmit={this.handleSubmit}>
                        <h2 class="text-center">Sign in</h2>		
                      {/*   <div class="text-center social-btn">
                            <a href="#" class="btn btn-primary btn-block"><i class="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
                            <a href="#" class="btn btn-danger btn-block"><i class="fa fa-google"></i> Sign in with <b>Google</b></a>
                        </div> */}
                            <div className="form-group">
                                
                            <div class="input-group mt-3 mb-4">
                                <div class="input-group-prepend">
                                <div class="input-group-text"><i class="fa fa-user"></i></div>
                                </div>
                                    
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputEmail" placeholder="Email address" type="email" name="email" onChange={this.handleEmailChange} autoFocus required/>
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
                            <div class="clearfix">
                                <label class="pull-left checkbox-inline"><input 
                                type="checkbox" /> Remember me</label>
                                
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Sign in &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                           
                        </form>
                        <div class="hint-text small">Don't have an account?<Link to="/signup">Register Now!</Link></div>
                    
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
}
