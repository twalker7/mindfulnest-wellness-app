import Button from 'react-bootstrap/Button'
import './App.css';

import useState from 'react'
import AudioComponent from './components/AudioComponent'

function App() {

  function playAudio(){
    alert("button worked!")

  }



  return (
    <div className="App">
      <header className="App-header">
  
        <div className="app-control-container"> 
          <p>
         CONSOLE
        </p>
        <AudioComponent />

      <div className="button-box">
        
         <Button variant="light" onClick={playAudio}> Button </Button>
      </div>
      
        </div>

        
      </header>
    </div>
  );
}

export default App;

// import audio file
//create array of key value pairs for console and selection of audio file(s)
//implement function for button that displays key and runs the value of each pair