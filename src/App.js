import "./App.css";
import { FaFreeCodeCamp } from "react-icons/fa";
import React, { useState } from "react";
import DrumMachine from "./components/DrumMachine";
import Controll from "./components/Controll";

function App() {
	const [volume, setVolume] = useState(0.5);
	const [displayDrum, setDisplayDrum] = useState("");

	return (
		<div className="App bg-dark min-vh-100 w-100">
			<header className="App-header">
				<h3 className="headerText">Drum Machine</h3>
				<h2 className="mr-3">
					<a
						className="App-link"
						href="https://www.freecodecamp.org/huncage"
					>
						freeCodeCamp
						<FaFreeCodeCamp className="iconFCC" />
					</a>
				</h2>
			</header>

			<main id="drum-machine" className="container d-flex flex-wrap justify-content-center align-items-center">
				<div id="display" className="row w-100">
					<div className="col-8 m-2 w-50">
							<DrumMachine
								displayDrum={displayDrum}
								setDisplayDrum={setDisplayDrum}
								volume={volume}
								setVolume={setVolume}
							/>
					</div>
					<div className="col-4 d-flex justify-content-between align-items-between m-auto">
						<Controll
							volume={volume}
							setVolume={setVolume}
							displayDrum={displayDrum}
							setDisplayDrum={setDisplayDrum}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
