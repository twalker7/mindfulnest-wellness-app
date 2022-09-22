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

                         //add listeners for saving video/audio
                         let start = document.getElementById('btnStart');
                         let stop = document.getElementById('btnStop');
                         let vidSave = document.getElementById('vid2');
                         let mediaRecorder = new MediaRecorder(mediaStreamObj);
                         let chunks = [];
             
                         
      }   ); 


 

    return(
        <div className="record-component-container">
        <div className="button-box">
        
        
  </div>
        <p><button id="btnStart">START RECORDING</button><br/>
        <button id="btnStop">STOP RECORDING</button></p>
        
        <video id="video" controls></video>

        <video id="vid2" controls></video>


   

          <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>     
    )
}

// <Button variant="light" onClick={playAudio}> Record  </Button>

export default RecordComponent; 


