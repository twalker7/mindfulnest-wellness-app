import React from 'react';


function AudioComponent(){

    return(
        <div>
            <h4> General Sample </h4> 
        <audio controls>
        <source src={require("../../../src/assets/mindfulnest-affirmation-demoset1-general.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>

            <h4> When Facing adversity  </h4> 
        <audio controls>
        <source src={require("../../../src/assets/mindfulnest-affirmation-demoset2-adversity.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>

        <h4> Body Wellness </h4> 
        <audio controls>
        <source src={require("../../../src/assets/mindfulnest-affirmation-demoset3-bodywellness.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>


        </div>
    )
}

export default AudioComponent; 