const audios = {
	Heater1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
	Heater2: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
	BigRackTom: "https://tympanus.net/Tutorials/SVGDrums/mp3/Big-Rack-Tom.mp3",
	Crash: "https://tympanus.net/Tutorials/SVGDrums/mp3/Crash.mp3",
	FloorTom: "https://tympanus.net/Tutorials/SVGDrums/mp3/Floor-Tom.mp3",
	HiHatClosed: "https://tympanus.net/Tutorials/SVGDrums/mp3/Hi-Hat-Closed.mp3",
	Kick: "https://tympanus.net/Tutorials/SVGDrums/mp3/Kick.mp3",
	SmallRackTom:
		"https://tympanus.net/Tutorials/SVGDrums/mp3/Small-Rack-Tom.mp3",
	Snare: "https://tympanus.net/Tutorials/SVGDrums/mp3/Snare.mp3"
};

const Display = props => <p id='display'>{props.playing}</p>

const DrumPad = props => {
	return (
		<div>
			<button
				className="drum-pad"
				id={props.pads.sound}
				type="button"
				onClick={() =>
					props.onPlaySound(document.getElementById(Q))
				}
			>
				{props.pads.id}
				<audio
					src={audios[props.pads.sound]}
					className="clip"
					id={props.pads.id}
					name={props.pads.sound}
					type="audio/mp3"
					preload="auto"
				/>
			</button>
		</div>
	);
};

 class DrumMachine extends React.Component {
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
				<Display playing={this.state.playing} />
				{this.state.drumPads.map(pads => (
					<DrumPad pads={pads} onPlaySound={this.playSound} />
				))}
			</React.Fragment>
		);
	}
}

export default DrumMachine;