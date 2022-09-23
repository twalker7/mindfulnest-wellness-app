import React from 'react';
import Button from 'react-bootstrap/Button';

function RecordComponent(props){

    function playAudio(){
        alert("This button is under construction!")
    
      }


    let constraintObj = { 
        audio: true, 
        video: { 
            facingMode: "user", 
            width: { min: 150, ideal: 150, max: 150 },
            height: { min: 150, ideal: 150, max: 150 } 
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
          //show in the video element what is being captured by the webcam
          video.play();
      };
      
                        
   //add listeners for saving video/audio
   let start = document.getElementById('button-start');
   let stop = document.getElementById('button-stop');
   let vidSave = document.getElementById('vid2');
   let mediaRecorder = new MediaRecorder(mediaStreamObj);
   let chunks = [];



  start.addEventListener('click', (ev)=>{
   if(mediaRecorder.state != "recording"){
    mediaRecorder.start();
    console.log(mediaRecorder.state);
   } 
})
stop.addEventListener('click', (ev)=>{
    if(mediaRecorder.state != "inactive"){
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
    }

});
 mediaRecorder.ondataavailable = function(ev) {
    chunks.push(ev.data);
}

mediaRecorder.onstop = (ev)=>{
    let blob = new Blob(chunks, { 'type' : 'video/mp4;' });
    chunks = [];
    let videoURL = window.URL.createObjectURL(blob);
    vidSave.src = videoURL;
}

})

.catch(function(err) { 
console.log(err.name, err.message); 
}); 
 
      

 

    return(
        <div className="record-component-container">

        <div className="record-button-container">
         <Button variant="success" id="button-start" > START </Button>
         <Button variant="danger" id="button-stop" > STOP  </Button>

      
        </div>
        
        <video id="video" controls ></video>

        <video id="vid2" controls></video>


   

          <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>     
    )
}


/* 
deleted buttons styled to match .record-buttons css ruling
            <button id="button-start" className="record-buttons">START RECORDING</button>
            <button id="button-stop" className="record-buttons">STOP RECORDING</button>

*/
export default RecordComponent; 


