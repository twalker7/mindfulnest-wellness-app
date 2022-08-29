import Button from 'react-bootstrap/Button'
import './App.css';

import {useState} from 'react'
import AudioComponent from './components/AudioComponent'
import HomeMenu from './components/HomeMenu'
import Contact from './components/Contact';
import About from './components/About';
import RecordComponent from './components/RecordComponent';
function App() {

  const [currentComponent, setCurrentComponent] = useState('home');


  function changeComponent(){
    switch (currentComponent) {
      case 'home':
        return <HomeMenu currentComponent={currentComponent} setCurrentComponent={setCurrentComponent}/>
        
      case 'contact':
        return <Contact currentComponent={currentComponent} setCurrentComponent={setCurrentComponent}/>
      case 'about':
        return <About currentComponent={currentComponent} setCurrentComponent={setCurrentComponent}/>

      case 'audio':
        return <AudioComponent currentComponent={currentComponent} setCurrentComponent={setCurrentComponent}/>

        case 'record':
          return <RecordComponent currentComponent={currentComponent} setCurrentComponent={setCurrentComponent}/>
  
       
      default: 
      return
  
    }
  }




  return (
    <div className="App">
      <header className="App-header">
      <div className="app-title-container"> 
      <h1 className="app-title"> MINDFULNEST </h1>
      <h6 className="app-subtitle"> a launchpad for manifestation </h6>
      </div>
        <div className="app-control-container-surrounder"> 
        <div className="app-control-container"> 


          {changeComponent()}

      
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