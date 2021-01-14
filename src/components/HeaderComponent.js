import React, { Component } from 'react';
import { Nav, Navbar,NavbarToggle,NavbarBrand,NavItem,Button } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';

function Header(props) {
    if (window.location.pathname === '/signin' || window.location.pathname === '/signup' ) return null;
    return(
            
                    <Navbar className="navbar-custom mr-auto" expand="lg" variant="dark" sticky="top">
                    <Navbar.Brand className="mr-auto">
                        <img
                            src="/logo1.png"
                            width="400"
                            height="70"
                            className="d-inline-block align-top"
                            alt="Parintek Innovations"
                        /></Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
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
                        
                        <NavLink className="nav-link"  to='/blog'  
                        style={{color: 'white', textDecoration: 'none'}} 
                        activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>BLOG</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link"  to='/contacts'  
                        style={{color: 'white', textDecoration: 'none'}} 
                        activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>CONTACT US</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link"  to='/faq' 
                        style={{color: 'white', textDecoration: 'none'}} 
                        activeStyle={{fontWeight: "bold",color: "white",textDecoration: 'underline'}}>FAQ</NavLink>
                    </NavItem>
                    <NavItem>
                        <div class="item">
                        <i class="fa fa-sign-in"></i>
                        <span class="caption"><Link to="/signin" style={{color: 'white', textDecoration: 'none'}}>LogIn</Link></span>
                        </div>
                    </NavItem>
                    <NavItem>
                        <div class="item">
                        <i class="fa fa-user"></i>
                        <span class="caption"><Link to="/signup" style={{color: 'white', textDecoration: 'none'}}>SignUp</Link></span>
                        </div>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
   
                
            
        )
    }

export default Header;
