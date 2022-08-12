import React from 'react';


function AudioComponent(){

    return(
        <div>
            <h4> general positivity </h4> 
        <audio controls>
        <source src={require("../../../src/mindfulnest-affirmation-demoset1.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>

            <h4> facing adversity  </h4> 
        <audio controls>
        <source src={require("../../../src/mindfulnest-affirmation-demoset1.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>

        <h4> general health  </h4> 
        <audio controls>
        <source src={require("../../../src/mindfulnest-affirmation-demoset1.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>


        </div>
    )
}

export default AudioComponent; 