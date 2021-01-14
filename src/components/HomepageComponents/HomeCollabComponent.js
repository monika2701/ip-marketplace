import React from 'react';


function HomeCollab(props) { 
    
   return (

    <div id="section4">
    <div className="container pt-3">

	<h1><center>Our Collaborators</center></h1>
    <br/>
		<div className="row justify-content-center">

            <div className="col-lg-6 col-md-10">
                <div className="wrap">
                    <div className="ico-wrap">
                        <span className="iconfont fa fa-users"></span>
                    </div>
                    <div className="text-wrap center">
                        <h2 className="fonts-style bold section-title3 display-5">Students</h2>
                        <p className="fonts-style text1 text display-6">Giving bright, innovative and young minds a platform to get rights on their intellectual property</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-10">
                <div className="wrap">
                    <div className="ico-wrap">
                        <span className="iconfont fa fa-graduation-cap"></span>
                    </div>
                    <div className="text-wrap center">
                        <h2 className="fonts-style bold section-title3 display-5">Researchers</h2>
                        <p className="fonts-style text1 text display-6">Providing the right protection and value to their indigenous works</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-10">
                <div className="wrap">
                    <div className="ico-wrap">
                        <span className="iconfont fa fa-rocket"></span>
                    </div>
                    <div className="text-wrap center">
                        <h2 className="fonts-style bold section-title3 display-5">Start-Up/MSME</h2>
                        <p className="fonts-style text1 text display-6">Solidification of there company valuation with IP assets</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-10">
                <div className="wrap">
                    <div className="ico-wrap">
                        <span className="iconfont fa fa-briefcase"></span>
                    </div>
                    <div className="text-wrap center">
                        <h2 className="fonts-style bold section-title3 display-5 ml-3">Corporates</h2>
                        <p className="fonts-style text1 text display-6 ml-3">Best in class IP Services</p>
                    </div>
                </div>
            </div>

            <a href="#section5"> <div class="encircle bounce animated mt-2">
  <div class="arrow">
  </div>
</div>  </a>
           {/*  <a class="ct-btn-scroll" href="#section5"><img alt="Arrow Down Icon" src="assets/13.png"/></a> */}
            
        </div>
       
</div>

</div>   

)
}

export default HomeCollab;