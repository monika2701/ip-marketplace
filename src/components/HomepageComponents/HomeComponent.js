import React,{Component} from 'react';
import './Home.css';
import HomeMain from './HomeMainComponent';
import HomeHelp from './HomeHelpComponent';
import HomeServices from './HomeServicesComponent';
import HomeCollab from './HomeCollabComponent';
import HomeContact from './HomeContactComponent';
import HomeAbout from './HomeAboutComponent';



class Home extends Component{
render(){
    return (
    
      <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <HomeMain/>
        </div>
        <div class="carousel-item">
          <HomeAbout/>
        </div>
        <div class="carousel-item">
         <HomeHelp/>
        </div>
        <div class="carousel-item">
          <HomeCollab/>
        </div>
        <div class="carousel-item">
          <HomeServices/>
        </div>
        <div class="carousel-item">
          <HomeContact/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <span class="width blink_me"><i class="fa fa-angle-left fa-4x" style={{color:'yellow',fontWeight:'bold'}}></i></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="width blink_me"><i class="fa fa-angle-right fa-4x" style={{color:'yellow',fontWeight:'bold'}}></i></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    )
  }
}


export default Home;