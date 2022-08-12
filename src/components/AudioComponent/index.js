import React from 'react';


function AudioComponent(){

    return(
        <div>
            <h4> General positivity </h4> 
        <audio controls>
        <source src={require("../../../src/assets/mindfulnest-affirmation-demoset1.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>

            <h4> When Facing adversity  </h4> 
        <audio controls>
        <source src={require("../../../src/assets/mindfulnest-affirmation-demoset1.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>

        <h4> General Health  </h4> 
        <audio controls>
        <source src={require("../../../src/assets/mindfulnest-affirmation-demoset1.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>


        </div>
    )
}

export default AudioComponent; 