import React from 'react';
import Button from 'react-bootstrap/Button';

function RecordComponent(props){

    function playAudio(){
        alert("This button is under construction!")
    
      }
    
      
    return(
        <div className="record-component-container">
        <div className="button-box">
        
        <Button variant="light" onClick={playAudio}> Record  </Button>
  </div>
        <audio id="player" controls></audio>


   

          <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>     
    )
}

export default RecordComponent; 
