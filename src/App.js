import React, { Component, Fragment } from "react";

import "./App.css";
import {DrumDisplay} from '../src/Components/DrumDisplay'


let logKey="";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drumPads: [
				{ id: "Q", sound: "Heater1" },
				{ id: "W", sound: "Heater2" },
				{ id: "E", sound: "BigRackTom" },
				{ id: "A", sound: "Crash" },
				{ id: "S", sound: "FloorTom" },
				{ id: "D", sound: "HiHatClosed" },
				{ id: "Z", sound: "Kick" },
				{ id: "X", sound: "SmallRackTom" },
				{ id: "C", sound: "Snare" }
			],
			playing: 'Start playing'
		};
	}
	playSound = instrument => {
		instrument.currentTime = 0;
		instrument.play();
		this.state.drumPads.map((e) => {
			if (e.id === instrument.id) {
				this.setState({ playing: e.sound })
			}
		})
	};
  render() {
		logKey = e => {
			this.playSound(document.getElementById(`${e.key.toUpperCase()}`));
		};
		document.querySelector("html").onkeydown = logKey;
    return (
			<React.Fragment>
				
      <DrumDisplay />
		
			</React.Fragment>

		);
  }
}

export default App;
