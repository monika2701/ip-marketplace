import React,{Component} from 'react';
import ContactAddress from './ContactAddress';
import ContactForm from './Contactform';


class Contact extends Component{
    render(){
        return (
          
          <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <ContactAddress />
        </div>
        <div class="carousel-item">
        <ContactForm />
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
    
    
    export default Contact;

