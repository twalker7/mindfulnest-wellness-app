import React from 'react';


function AudioComponent(props){
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
        <div className="audio-container">

        <h2>
         Audio Track Prototypes
        </h2>
      <div>
        <h4> General Sample </h4> 
        <audio controls>
          <source src={require("../../../src/assets/mindfulnest-affirmation-demoset1-general.mp3")} type="audio/mpeg"/>
          <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
        </audio>
      </div>

        <div>
          <h4> When Facing adversity  </h4> 
          <audio controls>
            <source src={require("../../../src/assets/mindfulnest-affirmation-demoset2-adversity.mp3")} type="audio/mpeg"/>
            <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
          </audio>
        </div>

        <div>
          <h4> Body Wellness </h4> 
          <audio controls>
            <source src={require("../../../src/assets/mindfulnest-affirmation-demoset3-bodywellness.mp3")} type="audio/mpeg"/>
            <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
          </audio>
        </div>
    

        <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>
    )
}

export default AudioComponent; 