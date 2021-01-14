import React from 'react';


function HomeAbout(props) {
    
   return (
     <div id="section2">
    <div class="container">
         <div class="about"> 
       <div class="row">
           
      
     <div class="col-lg-4">    
        <h1>WE AIM TO PROVIDE THE BEST POSSIBLE PROTECTION FOR YOUR INTELLECTUAL PROPERTY !</h1></div> 
     <div class="col-lg-8">
      <p>Parintek’s IP MarketPlace offers a one point stop for Students, Researchers, Startup’s and 
          Corporates with regards to their intellectual property queries.Not only the queries, any need of 
          intellectual property services can be even fulfilled at this marketplace.Apart from the business 
          context of intellectual property the Marketplace offers the Students to learn the in and outs of 
          intellectual property and build a career as well. As for the researcher’s, funds to support their 
          innovation can even be generated through this platform.</p> <p>The platform offers a plethora of IP 
          Professionals, Law Firms and Consulting Firms who can provide all the needed support for the protection 
          of your intellectual property.The benefits of the platform are one too many so our advice is to 
          explore IP MarketPlace but do remember Parintek is always there to help you with your IP needs.</p>
          </div>
         

         {/*  <a class="ct-btn-scroll pt-5" href="#section3"><img alt="Arrow Down Icon" src="assets/13.png"/></a> */}
          </div>
          <a href="#section3"> <div class="encircle bounce animated" style={{ border: 'solid 2px #181277'}}>
  <div class="arrow">
  </div>
</div>  </a>
    </div> 
    
    </div>
    </div>
)
}

export default HomeAbout;