import React from 'react';

function About(props){
    return(
        <div className="about-component-container">
            About 
            <div className="about-content-section"> Mindfulnest is an application created to promote and regulate mental and physical wellness . Affirmations and mantras have been used by many different cultures for many years as an understo </div>
            <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>
    
        </div>
    )
}

export default About; 