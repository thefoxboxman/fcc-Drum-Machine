import React from "react";

export function DrumDisplay() {
  const Q = document.getElementById("Q");
  return (
    <React.Fragment>
      <div id="drum-machine">
        <div id="display">hello from display</div>

				{/*Button 'Q' on Drum Pad */}
				<div className="drum-pad" id="heater1">
        	<audio className="clip" id="Q" name="Heater 1">
            <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" />
          </audio>

					{
						<button 
							onClick={() => document.getElementById("Q").play()}>
							<p>Q</p>
						</button>
					}
				
        </div>
	
				{/*Button 'W' on Drum Pad */}
<div>

				<audio className="clip" id="W" name="Heater 2">
					<source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" />
				</audio>

				{
					<button className="drum-pad" id="heater2"
						onClick={() => document.getElementById("W").play()}>
						<p>W</p>
					</button>
				}
</div>
				{/*Button 'E' on Drum Pad */}
				<div>
				<audio className="clip" id="E" name="bigRackTom">
					<source src="https://tympanus.net/Tutorials/SVGDrums/mp3/Big-Rack-Tom.mp3" />
				</audio>

				{
					<button className="drum-pad" id="bigRackTom"
						onClick={() => document.getElementById("E").play()}>
						<p>E</p>
					</button>
				}
</div>
				{/*Button 'A' on Drum Pad */}
				<div>
				<audio className="clip" id="A" name="Crash">
					<source src="https://tympanus.net/Tutorials/SVGDrums/mp3/Crash.mp3" />
				</audio>

				{
					<button className="drum-pad" id="Crash"
						onClick={() => document.getElementById("A").play()}>
						<p>A</p>
					</button>
				}
</div>
				{/*Button 'S' on Drum Pad */}
				<div>
				<audio className="clip" id="S" name="Floor Tom">
					<source src="https://tympanus.net/Tutorials/SVGDrums/mp3/Floor-Tom.mp3" />
				</audio>

				{
					<button className="drum-pad" id="floorTom"
						onClick={() => document.getElementById("S").play()}>
						<p>S</p>
					</button>
				}
      </div>  
				{/*Button 'D' on Drum Pad */}
				<div>
				<audio className="clip" id="D" name="High Hat Closed">
					<source src="https://tympanus.net/Tutorials/SVGDrums/mp3/Hi-Hat-Closed.mp3" />
				</audio>

				{
					<button className="drum-pad" id="highHatClosed"
						onClick={() => document.getElementById("D").play()}>
						<p>D</p>
					</button>
				}  
</div>
				{/*Button 'Z' on Drum Pad */}
				<div>
				<audio className="clip" id="Z" name="Kick">
					<source src="https://tympanus.net/Tutorials/SVGDrums/mp3/Kick.mp3" />
				</audio>

				{
					<button className="drum-pad" id="kick"
						onClick={() => document.getElementById("Z").play()}>
						<p>Z</p>
					</button>
				}     
</div>
				{/*Button 'X' on Drum Pad */}
				<div>
				<audio className="clip" id="X" name="Small Rack Tom">
					<source src="https://tympanus.net/Tutorials/SVGDrums/mp3/Small-Rack-Tom.mp3" />
				</audio>

				{
					<button className="drum-pad" id="smallRackTom"
						onClick={() => document.getElementById("X").play()}>
						<p>X</p>
					</button>
				} 
</div>
				{/*Button 'C' on Drum Pad */}
				<div>
				<audio className="clip" id="C" name="Snare">
					<source src="https://tympanus.net/Tutorials/SVGDrums/mp3/Snare.mp3" />
				</audio>

				{
					<button className="drum-pad" id="snare"
						onClick={() => document.getElementById("C").play()}>
						<p>C</p>
					</button>
				} 
				</div>
      </div>
    </React.Fragment>
  );
}
