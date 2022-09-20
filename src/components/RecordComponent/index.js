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
            width: { min: 640, ideal: 1280, max: 1920 },
            height: { min: 480, ideal: 720, max: 1080 } 
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
      }   ); 
    return(
        <div className="record-component-container">
        <div className="button-box">
        
        <Button variant="light" onClick={playAudio}> Record  </Button>
  </div>
        <video id="video" controls></video>


   

          <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>     
    )
}

export default RecordComponent; 
