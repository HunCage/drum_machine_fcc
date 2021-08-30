import React from "react";
import bankOne from "../assets/bankOne";
import Pad from "./Pad";

const DrumMachine = ({
	volume,
	displayDrum,
	setDisplayDrum,
	handleKeySound,
}) => {
	return (
		<div className="col-12">
				{bankOne.map((clip) => (
					<Pad
						key={clip.id}
						clip={clip}
						volume={volume}
						displayDrum={displayDrum}
						setDisplayDrum={setDisplayDrum}
						handleKeySound={handleKeySound}
					/>
				))}
		</div> 
	);
};

export default DrumMachine;
