import React from 'react';
import {Button} from 'react';

function RecordComponent(props){

    function playAudio(){
        alert("This button is under construction!")
    
      }
    
      
    return(
        <div>
        <div className="button-box">
        
        <Button variant="light" onClick={playAudio}> Record  </Button>

        <audio id="player" controls></audio>


     </div>

     <div className="back-button"> <a  onClick={()=> props.setCurrentComponent('home')}> back</a></div>

        </div>
    )
}

export default RecordComponent; 
