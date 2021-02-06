import React,{Component} from 'react';
import './Contact.css';
import ContactAddress from './ContactAddress';
import ContactForm from './Contactform';


class Contact extends Component{
    render(){
        return (
          
          <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
             <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
        <ContactAddress />
        </div>
        <div class="carousel-item">
        <ContactForm />
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
    
    
    export default Contact;

