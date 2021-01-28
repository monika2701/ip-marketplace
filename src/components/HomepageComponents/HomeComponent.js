import React,{Component} from 'react';

import HomeMain from './HomeMainComponent';
import HomeHelp from './HomeHelpComponent';
import HomeServices from './HomeServicesComponent';
import HomeCollab from './HomeCollabComponent';
import HomeContact from './HomeContactComponent';
import HomeAbout from './HomeAboutComponent';


/* setTimeout(function(){
  window.location.reload();
}, 60000); */
class Home extends Component{
render(){
    return (
      
      <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
     <div class="carousel-inner">
    <div class="carousel-item active">
    <HomeMain />
    </div>
    <div class="carousel-item">
    <HomeAbout />
    </div>
    <div class="carousel-item">
    <HomeHelp />
    </div>
    <div class="carousel-item">
    <HomeCollab/>
    </div>
    <div class="carousel-item">
    <HomeServices />
    </div>
    <div class="carousel-item">
    <HomeContact />
    </div>
   
  </div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      
    )
  }
}


export default Home;