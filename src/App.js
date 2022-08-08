import Button from 'react-bootstrap/Button'
import './App.css';


function App() {

  function playAudio(){
    alert("button worked!")
    var audio = document.getElementById("audio");
  }

  return (
    <div className="App">
      <header className="App-header">
  
        <div className="app-control-container"> 
          <p>
         CONSOLE
        </p>
        <audio id="audio" controls>
    <source src={require("../src/mindfulnest-affirmation-demoset1.mp3")} type="audio/mpeg"/>
    <source src="src/mindfulnest-affirmation-demoset.mp3" type="audio/ogg"/>
</audio>
      <div className="button-box">
        
         <Button variant="light" onClick={playAudio}> Play Affirmation </Button>
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