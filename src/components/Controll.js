import React from "react";

const Controll = ({ displayDrum, volume, setVolume }) => {
	return (
		<div className="w-100 d-flex justify-content-center flex-column align-item-center flex-column-sm">
			{/* <h3 className="text-warning text-center disDrum mb-5">{displayDrum}</h3> */}
			<h3 className="text-warning text-center disDrum mb-5">
				{displayDrum.charAt(0).toUpperCase() + displayDrum.slice(1)}
			</h3>
				<h5 className="text-warning text-center">
					volume {parseInt(volume * 100)}%
				</h5>
				<input
					type="range"
					name="volume"
					className="volumeSlider"
					onChange={(e) => setVolume(e.target.value)}
					value={volume}
					title={parseInt(volume * 100)}
					step="0.01"
					min={0}
					max={1}
				/>
		</div>
	);
};

export default Controll;
