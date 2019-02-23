import React from "react";

export function DrumDisplay() {
  
  return (
    <React.Fragment>
      <div id="drum-machine">
        <div id="display">
Click to Play
				</div>

				{/*Button 'Q' on Drum Pad */}
				
        	

					{
						<button className="drum-pad" id="heater1"
							onClick={() => document.getElementById("Q").play()}
							onMouseUp={() => document.getElementById("display").innerHTML="Heater 1"}
						>
						<audio className="clip" id="Q" 
							 src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
						
							Q
						</button>
					}
				
        
	
				{/*Button 'W' on Drum Pad */}

				{
					<button className="drum-pad" id="heater2"
						onClick={() => document.getElementById("W").play()}
							onMouseUp={() => document.getElementById("display").innerHTML = "Heater 2"}>

						<audio className="clip" id="W" 
						src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
						

						W
					</button>
				}

				{/*Button 'E' on Drum Pad */}
			
				{
					<button className="drum-pad" id="bigRackTom"
						onClick={() => document.getElementById("E").play()}
							onMouseUp={() => document.getElementById("display").innerHTML = "Big Rack Tom"}>

						<audio className="clip" id="E"
						 src="https://tympanus.net/Tutorials/SVGDrums/mp3/Big-Rack-Tom.mp3" />
						

						E
					</button>
				}

				{/*Button 'A' on Drum Pad */}
			
				{
					<button className="drum-pad" id="Crash"
						onClick={() => document.getElementById("A").play()}
							onMouseUp={() => document.getElementById("display").innerHTML = "Crash"}>

						<audio className="clip" id="A"
						src="https://tympanus.net/Tutorials/SVGDrums/mp3/Crash.mp3" />
						

						A
					</button>
				}

				{/*Button 'S' on Drum Pad */}
			
				{
					<button className="drum-pad" id="floorTom"
						onClick={() => document.getElementById("S").play()}
							onMouseUp={() => document.getElementById("display").innerHTML = "Floor Tom"}>

						<audio className="clip" id="S" 
						src="https://tympanus.net/Tutorials/SVGDrums/mp3/Floor-Tom.mp3" />
						

						S
					</button>
				}
        
				{/*Button 'D' on Drum Pad */}
			
				{
					<button className="drum-pad" id="highHatClosed"
						onClick={() => document.getElementById("D").play()}
							onMouseUp={() => document.getElementById("display").innerHTML = "High Hat Closed"}>

						<audio className="clip" id="D" 
						 src="https://tympanus.net/Tutorials/SVGDrums/mp3/Hi-Hat-Closed.mp3" />
						

						D
					</button>
				}  

				{/*Button 'Z' on Drum Pad */}
			
				{
					<button className="drum-pad" id="kick"
						onClick={() => document.getElementById("Z").play()}
							onMouseUp={() => document.getElementById("display").innerHTML = "Kick"}>

						<audio className="clip" id="Z"  src="https://tympanus.net/Tutorials/SVGDrums/mp3/Kick.mp3" />
						

						Z
					</button>
				}     

				{/*Button 'X' on Drum Pad */}
			
				{
					<button className="drum-pad" id="smallRackTom"
						onClick={() => document.getElementById("X").play()}
							onMouseUp={() => document.getElementById("display").innerHTML = "Small Rack Tom"}>

						<audio className="clip" id="X" 
						 src="https://tympanus.net/Tutorials/SVGDrums/mp3/Small-Rack-Tom.mp3" />
						

						X
					</button>
				} 

				{/*Button 'C' on Drum Pad */}
			
				{
					<button className="drum-pad" id="snare"
						onClick={() => document.getElementById("C").play()}
							onMouseUp={() => document.getElementById("display").innerHTML = "Snare"}>

						<audio className="clip" id="C" 
						 src="https://tympanus.net/Tutorials/SVGDrums/mp3/Snare.mp3" />
						

						C
					</button>
				} 
				
      </div>
    </React.Fragment>
  );
}
