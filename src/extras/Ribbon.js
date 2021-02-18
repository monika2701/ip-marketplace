import React,{Component} from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';



class Ribbon extends Component {
    constructor(props){
        super(props);
    
        this.state={
          is_active: null,
          webinar_id: null
         
        };
      
      }
      componentDidMount() {
        
        axios.post('https://marketplace.parintekinnovation.com/api/webinar.php?method=iswebinaractive')
            .then(result => { 
            console.log(result.data);
            var js = result.data.Response;
            if (result.data) {
              localStorage.setItem('isWebinarActive', js.is_active);
              localStorage.setItem('WebinarID', js.webinar_id);
           }
            

    })
} 
     
    render() {
      
      var status = localStorage.getItem('isWebinarActive');
        if(status == '0') {
            return null;
          }
        return (

         <div class="container">
           <div class="alert alert-warning alert-dismissible fade show" role="alert" 
                                                                              style={{position:"absolute",
                                                                              letterSpacing: '0.6px',
                                                                              marginTop:"10px",
                                                                              paddingTop:'5px',
                                                                              paddingBottom:'5px',
                                                                              zIndex:99,
                                                                              width:"85%"}}>
            <div id="viewport">
                  <i><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4nve30hvGg-iogJa5zDqJFUDuJRXSxB5OQ&usqp=CAU" 
                            style={{height: '25px',
                                    marginBottom: '0px',
                                    marginRight: '1%',
                                    borderRadius:"50%"}} /> </i> 
            <span><strong>Save the Date !! November 11, 2020 for a Webinar on IP Q&A for Startup, MSME and Academia. <Link target="_blank" to='/webinar'>
            Click here </Link> to register !! </strong></span>
            </div>
            
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" style={{marginTop:"-6px"}}>
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
            </div>

        );
        
    }
}

export default Ribbon;