import React from 'react';

function HomeMenu(props){




    return(
        <div className="home-menu">
<div> <a className="nav-element" onClick={()=> props.setCurrentComponent('home')}> Home</a></div>

<div> <a className="nav-element"  onClick={()=> props.setCurrentComponent('audio')}> Upcoming  </a></div>
<div> <a className="nav-element"  onClick={()=> props.setCurrentComponent('about')}> About </a> </div>
<div> <a className="nav-element"  onClick={()=> props.setCurrentComponent('contact')} > Contact/Submissions </a> </div>

        </div>
    )
}

export default HomeMenu; 
