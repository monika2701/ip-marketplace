import React from 'react';


function Iconbar(props) {
  if (window.location.pathname === '/signin' || window.location.pathname === '/signup') return null;
    return (

       <div className="icon-bar">
         <a href="#" class="facebook"><i class="fa fa-facebook"></i></a> 
         <a href="#" class="twitter"><i class="fa fa-twitter"></i></a> 
         <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
         <a href="#" class="youtube"><i class="fa fa-youtube"></i></a> 
       </div>
    )
}

export default Iconbar;