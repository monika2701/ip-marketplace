import React, { Component } from 'react';
import { Nav, Navbar,NavItem } from 'react-bootstrap';
import { NavLink,Link} from 'react-router-dom';
import axios from 'axios';


/* setTimeout(function(){
    window.location.reload();
  }, 15000);
 */
  
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout = event => {
    
        event.preventDefault();
        const url = 'https://marketplace.parintekinnovation.com/api/user.php?method=logout';
        var object ={};
        object['session_token'] = localStorage.getItem('token');
        var json = JSON.stringify(object);
        console.log(json);
        
        localStorage.removeItem('token');
        localStorage.setItem('isLoggedIn', false);
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('user_ref_no');
       
        

        axios.post(url, json,{
          headers:{
            'Content-Type':'application/json'
          }
        }) 
    };
    
    

    render() {
    
        if (window.location.pathname === '/webinar' || window.location.pathname === '/webinarRegistration') return null;
       
        if(!localStorage.getItem('token')) {
            return (
            <Navbar className="navbar-custom" expand="lg" variant="dark" sticky="top">
            <Navbar.Brand>
                <img
                    src="assets/logo1.png"
                    width="300"
                    height="50"
                    alt="Parintek Innovations"
                /></Navbar.Brand>
    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <NavItem>
                <NavLink className="nav-link"  to='/home'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>HOME</NavLink>
                </NavItem>

                <NavItem>
                <NavLink className="nav-link"  to='/students'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>STUDENTS</NavLink>
                </NavItem>

                <NavItem>
                <NavLink className="nav-link"  to='/researchers'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>RESEARCHERS</NavLink>
                </NavItem>

                <NavItem>
                <NavLink className="nav-link"  to='/startups'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>START UPS</NavLink>
                </NavItem>

                <NavItem>
                <NavLink className="nav-link"  to='/corporates'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>CORPORATES</NavLink>
                </NavItem>

                <NavItem>
                    
                <Link className="nav-link"  to='https://parintek.com/blog/'  target="_blank"
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>BLOG</Link>
                </NavItem>
                
              {/*   <NavItem>
                <NavLink className="nav-link"  to='/contacts'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>CONTACT US</NavLink>
                </NavItem> */}
                <NavItem>
                <NavLink className="nav-link"  to='/faq' 
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>FAQ</NavLink>
            </NavItem>
    
    
            <NavItem>
               <div style={{paddingLeft:'190px'}}>
            <i id="loginicon" class="fa fa-sign-in"></i>
            <span id="text"><Link to="/login" style={{color: 'white', textDecoration: 'none'}}>Login</Link></span>
               </div>
            </NavItem>
          
           
     </Nav>
    </Navbar.Collapse>
    </Navbar>
            )     
        }
        return (
            <Navbar className="navbar-custom" expand="lg" variant="dark" sticky="top">
            <Navbar.Brand className="mr-auto">
                <img
                    src="assets/logo1.png"
                    width="300"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Parintek Innovations"
                /></Navbar.Brand>
    
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    
                <NavItem>
                <NavLink className="nav-link"  to='/home'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>HOME</NavLink>
                </NavItem>

                <NavItem>
                <NavLink className="nav-link"  to='/students'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>STUDENTS</NavLink>
                </NavItem>

                <NavItem>
                <NavLink className="nav-link"  to='/researchers'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>RESEARCHERS</NavLink>
                </NavItem>

                <NavItem>
                <NavLink className="nav-link"  to='/startups'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>START UPS</NavLink>
                </NavItem>

                <NavItem>
                <NavLink className="nav-link"  to='/corporates'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>CORPORATES</NavLink>
                </NavItem>

                <NavItem>
                <Link className="nav-link"  to='https://parintek.com/blog/'  target="_blank"
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>BLOG</Link>
                </NavItem>

               {/*  <NavItem>
                <NavLink className="nav-link"  to='/webinar'  target="_blank"
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>WEBINAR</NavLink>
                </NavItem> */}
                
                {/* <NavItem>
                <NavLink className="nav-link"  to='/contacts'  
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>CONTACT US</NavLink>
                </NavItem> */}

                <NavItem>
                <NavLink className="nav-link"  to='/faq' 
                style={{color: 'white', textDecoration: 'none'}} 
                activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>FAQ</NavLink>
                </NavItem>

                <NavItem>
                <ul class="nav ml-5 pl-5 mt-2">
                    <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" style={{color: 'yellow'}}>Hello {JSON.parse(localStorage.getItem('username'))}</a>
                        <ul class="dropdown-menu" style={{minWidth: '100px'}}>
                        <li><Link to={'/'} onClick={this.handleLogout}>&nbsp;<i class="fa fa-power-off"></i>&nbsp;&nbsp;Logout</Link></li>
                        </ul>
                    </li>
                </ul>
            </NavItem>  
          
           
     </Nav>
    </Navbar.Collapse>
    </Navbar>
            
        )   
    }
}
