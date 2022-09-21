import React from 'react';
import Button from 'react-bootstrap/Button';

function RecordComponent(props){

    function playAudio(){
        alert("This button is under construction!")
    
      }


    let constraintObj = { 
        audio: false, 
        video: { 
            facingMode: "user", 
            width: { min: 250, ideal: 350, max: 400 },
            height: { min: 250, ideal: 325, max: 400 } 
        } 
    }; 


    navigator.mediaDevices.getUserMedia(constraintObj)
    .then(function(mediaStreamObj) {
        //connect the media stream to the first video element
        let video = document.querySelector('video');
        if ("srcObject" in video) {
            video.srcObject = mediaStreamObj;
        } else {
            //old version
            video.src = window.URL.createObjectURL(mediaStreamObj);
        }

        video.onloadedmetadata = function(ev) {
          // to automatically show in the video element what is being captured by the webcam without pressing play button
          video.play();
        }
      }   ); 


    return(
        <div className="record-component-container">
        <div className="button-box">
        
        
  </div>
        <video id="video" controls></video>


   

          <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>     
    )
}

// <Button variant="light" onClick={playAudio}> Record  </Button>

export default RecordComponent; 


