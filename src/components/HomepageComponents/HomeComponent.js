import React,{Component} from 'react';

import HomeMain from './HomeMainComponent';
import HomeHelp from './HomeHelpComponent';
import HomeServices from './HomeServicesComponent';
import HomeCollab from './HomeCollabComponent';
import HomeContact from './HomeContactComponent';
import HomeAbout from './HomeAboutComponent';



class Home extends Component{
render(){
    return (
      <article>
       
       <section><HomeMain /></section>
       <section><HomeAbout /></section>
       <section><HomeHelp /></section>
       <section><HomeCollab/></section>
       <section><HomeServices /></section>
       <section><HomeContact /></section>
         
         
         </article>
    )
  }
}


export default Home;