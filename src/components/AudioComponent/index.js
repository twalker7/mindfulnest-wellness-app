import React from 'react';


function AudioComponent(){
/* documentation from 
const player = document.getElementById('player');

const handleSuccess = function (stream) {
  if (window.URL) {
    player.srcObject = stream;
  } else {
    player.src = stream;
  }
};

navigator.mediaDevices
  .getUserMedia({audio: true, video: false})
  .then(handleSuccess);

  */
    return(
        <div>

        <h2>
         Audio Prototypes
        </h2>

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