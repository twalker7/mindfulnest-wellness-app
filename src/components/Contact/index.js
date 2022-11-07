import React from 'react';

function Contact(props){
    return(
        <div className="contact-component-container">
            Contact Us 
            <div className=""> 
            <h3>  </h3>
            <h3>  </h3>
            <img src=""/>
            </div>

            <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>
    )
}

export default Contact; 
