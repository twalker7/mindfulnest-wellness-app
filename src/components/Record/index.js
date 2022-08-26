import React from 'react';

function Record(){
    return(
        <div>
        <div className="button-box">
        
        <Button variant="light" onClick={playAudio}> Record  </Button>

        <audio id="player" controls></audio>


     </div>
        </div>
    )
}

export default Record; 
