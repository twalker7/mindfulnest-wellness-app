import Button from 'react-bootstrap/Button'
import './App.css';

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
      <div className="button-box">
         <Button variant="light" onClick={playAudio}> Play Affirmation </Button>
      </div>
        </div>

        
      </header>
    </div>
  );
}

export default App;
