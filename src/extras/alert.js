import React,{Component} from 'react';
import $ from 'jquery';






class Alert extends Component {
 
    componentDidMount() {
        window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 4000);
    }
 
    
  render(){
   
   return (
   <div class="alert alert-success" role="alert" style={{position:'fixed',top:'100px',right:'5px'}}>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Success!</strong> You details have been submitted successfully!
</div>

)
}
}

export default Alert;