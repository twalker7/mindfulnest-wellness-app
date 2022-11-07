import React from 'react';

function Contact(props){
    return(
        <div className="contact-component-container">
            Contact Us 
            <div className="contact-box"> 
            <h3>  </h3>
            <h3>  </h3>
            
         
            </div>

            <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>
    )
}

export default Contact; 
