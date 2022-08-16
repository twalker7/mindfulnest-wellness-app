import Button from 'react-bootstrap/Button'
import './App.css';

import useState from 'react'
import AudioComponent from './components/AudioComponent'

function App() {

  function playAudio(){
    alert("This button is under construction!")

  }

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

      const handleSuccess2 = function(stream) {
    const context = new AudioContext();
    const source = context.createMediaStreamSource(stream);
    const processor = context.createScriptProcessor(1024, 1, 1);

    source.connect(processor);
    processor.connect(context.destination);

    processor.onaudioprocess = function(e) {
      // Do something with the data, e.g. convert it to WAV
      console.log(e.inputBuffer);
    };
  };

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(handleSuccess2);


  return (
    <div className="App">
      <header className="App-header">
      <div className="app-title-container"> 
      <h1 className="app-title"> MINDFULNEST </h1>
      <h6 className="app-subtitle"> a launchpad for manifestation </h6>
      </div>
        <div className="app-control-container-surrounder"> 
        <div className="app-control-container"> 
          <h2>
         Audio Prototypes
        </h2>
        <AudioComponent />

      <div className="button-box">
        
         <Button variant="light" onClick={playAudio}> Record  </Button>

         <audio id="player" controls></audio>
         


      </div>
      
        </div>
        </div>

        <p className="copyright">  Copyright © 2022 All Rights Reserved </p>
      </header>
    </div>
  );
}

export default App;

// import audio file
//create array of key value pairs for console and selection of audio file(s)
//implement function for button that displays key and runs the value of each pair