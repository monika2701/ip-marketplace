import React from 'react';
import ScrollToTop from './ScrollTopComponent.js';

function Footer(props) {
    if (window.location.pathname === '/signin' || window.location.pathname === '/signup') return null;
    return(
        <div id="section7">
        <footer className="footer">
                <div className="container">
                <div className="row">
                <div className="col-sm-12 col-md-12  col-lg-3">
                <h5 className="col_white pt2">Parintek Innovations</h5>

                <p className="mb10">Parintek Innovation Inc. is a global organization that serves world class IP 
                consulting to leading Businesses, Universities & Institutions, non-profit organization and Governments.
                <br/><a href="https://www.parintek.com/about.php"  style={{color: 'Yellow', textDecoration: 'none'}}> Read more</a></p>


                </div>


                <div className=" col-sm-12 col-md col-6 col">
                <h5 className="col_white pt2">Useful Links</h5>

                <ul className="footer_ul">
                <li><a href="https://marketplace.parintekinnovation.com/">About</a></li>
                <li><a href="https://marketplace.parintekinnovation.com/">Blog</a></li>
                <li><a href="https://marketplace.parintekinnovation.com/">Career</a></li>
                <li><a href="https://marketplace.parintekinnovation.com/">IP News</a></li>
                </ul>

                </div>


                <div className=" col-sm-12 col-md  col-6 col">
                <h5 className="col_white pt2">Quick Links</h5>
                <ul className="footer_ul">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Site Map</a></li>
                <li><a href="#">FAQ</a></li>

                </ul>

                </div>


                <div className=" col-sm-12 col-md  col-6 col">
                <h5 className="col_white pt2">US</h5>

                <ul className="footer_ul2">
                <li><i class="fa fa-map-marker fleft padding-right"></i><p> Parintek Innovations Inc. 
                                            764 Southcross Dr W, 
                                            #202, Burnsville, MN 
                                            55306, USA</p></li>
                <li><i class="fa fa-phone fleft padding-right"></i><p>+1-202-318-0199</p></li>
                <li><i class="fa fa-envelope fleft padding-right"></i><p><a href="mailto:	info@parintek.com"  style={{color: 'white', textDecoration: 'none'}} >	info@parintek.com</a></p></li>
                </ul>

                </div>

                <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="col_white pt2">India</h5>


                <ul className="footer_ul2">
                <li><i class="fa fa-map-marker fleft padding-right"></i><p> UNIT 501A , Tower B, 
                                            Ithum IT Park, A-40, 
                                            sector 62, NOIDA , UP 
                                            Noida, Uttar Pradesh - 
                                            201309.</p></li>
                <li><i class="fa fa-phone fleft padding-right"></i><p>+918076510108</p></li>
                <li><i class="fa fa-envelope fleft padding-right"></i><p><a href="mailto:	info@parintek.com"  style={{color: 'white', textDecoration: 'none'}} >	info@parintek.com</a></p></li>
                </ul>

                </div>


                </div>
                </div>




                <div className="container mt-5">
                <p className="text-center">©2020 Parintek Innovations. All rights reserved | Developed by Parintek Inc.</p>

                <ul className="social_footer_ul">
                <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            
                </ul>

                </div>
                <ScrollToTop/>
                </footer>
     </div>
    )
    
}

export default Footer;