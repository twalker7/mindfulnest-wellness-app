import React from 'react';

function About(props){
    return(
        <div className="about-component-container">
            About 
            <div className="about-content-section"> Mindfulnest is an application created to promote and regulate mental and physical wellness. Affirmations and mantras have been used by many different cultures for generations as a technique to improve one's internal and external conditions. Mindfulnest not only provides users with affirmations–– it also gives you the chance to record and download your own! </div>
            <div className="about-section-video"> </div>
            <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>
    
        </div>
    )
}

export default About; 
