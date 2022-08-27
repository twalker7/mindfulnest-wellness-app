import React from 'react';

function HomeMenu(props){




    return(
        <div className="home-menu">

                <div> <a className="nav-element"  onClick={()=> props.setCurrentComponent('audio')}>  Mantra Sets  </a></div>
                <div> <a className="nav-element"  onClick={()=> props.setCurrentComponent('about')}> About </a> </div>
                <div> <a className="nav-element"  onClick={()=> props.setCurrentComponent('contact')} > Contact </a> </div>
                <div> <a className="nav-element" onClick={()=> props.setCurrentComponent('record')}> Record & Play</a></div>

        </div>
    )
}

export default HomeMenu; 
