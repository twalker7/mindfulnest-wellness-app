import React from 'react';


function AudioComponent(){

    return(
        <div>
        <audio>
        <source src={require("../src/mindfulnest-affirmation-demoset1.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>
        </div>
    )
}


export default AudioComponent; 