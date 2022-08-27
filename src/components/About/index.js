import React from 'react';

function About(props){
    return(
        <div>
            About 
            <div> <a className="nav-element" onClick={()=> props.setCurrentComponent('home')}> Home</a></div>

        </div>
    )
}

export default About; 
