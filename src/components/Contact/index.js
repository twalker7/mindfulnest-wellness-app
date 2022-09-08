import React from 'react';

function Contact(props){
    return(
        <div className="contact-component-container">
            Contact 
            <div className=""> 
            <h3> email </h3>
            <h3> phone</h3>
            </div>

            <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>
    )
}

export default Contact; 
