import React, { useEffect, useState } from "react";

const Pad = ({ volume, clip, setDisplayDrum }) => {
	const [active, setActive] = useState(false);

	useEffect(() => {
		document.addEventListener("keydown", handleKeySound);
		return () => {
			document.removeEventListener("keydown", handleKeySound);
		};
	});

	const handleKeySound = (e) => {
		if (e.keyCode === clip.keyCode) {
			playSound();
		}
	};

	const playSound = () => {
		const soundTag = document.getElementById(clip.keyTrigger);
		setActive(true);
		setTimeout(() => setActive(false), 150);
		setDisplayDrum(() => clip.id);
		soundTag.currentTime = 0;
		soundTag.volume = volume;
		soundTag.play();
	};

	return (
		<div
			onClick={playSound}
			className={`btn btn-secondary rounded-circle m-2 p-4 drum-pad ${
				active && "btn-warning"
			} flex-wrap`}
			id="drumBtn"
			onKeyDown={handleKeySound}
		>
			<audio
				id={clip.keyTrigger}
				src={`./sounds/${clip.id}.mp3`}
				className="clip"
			/>
			{clip.keyTrigger}
		</div>
	);
};

export default Pad;
