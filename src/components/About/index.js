import React from 'react';

function About(props){
    return(
        <div>
            About 
            <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>
    )
}

export default About; 