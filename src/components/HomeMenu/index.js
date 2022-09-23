import React from 'react';

function HomeMenu(props){




    return(
        <div className="home-menu-container">

                <div> <div className="home-menu-element"  onClick={()=> props.setCurrentComponent('audio')}>  Audio Tracks  </div></div>
                <div> <div className="home-menu-element"  onClick={()=> props.setCurrentComponent('record')}> Record Yours</div></div>
                <div> <div className="home-menu-element"  onClick={()=> props.setCurrentComponent('about')}> About </div> </div>
                <div> <div className="home-menu-element"  onClick={()=> props.setCurrentComponent('contact')} > Contact </div> </div>


        </div>
    )
}

export default HomeMenu; 
