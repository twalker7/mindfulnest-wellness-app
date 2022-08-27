import React from 'react';

function Contact(props){
    return(
        <div>
            Contact 


            <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>
    )
}

export default Contact; 
