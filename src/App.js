import './styles/App.css';
import { getRandomData } from './data/sentences.js';
import { Game } from './components/Game';
import { useState, useEffect } from 'react';
import { winHandler } from './data/winHandler.js';

function App() {
	const [userArray, setUserArray] = useState(getRandomData());
	const [wins, setWins] = useState();

	const resetHandler = () => {
		let reseter = getRandomData();
		setUserArray(reseter);
	};

	useEffect(() => {
		setWins(winHandler(userArray));
	}, [userArray]);

	return (
		<div className='App'>
			<div id='header'>
				<h1>Bingo.</h1>
			</div>
			<main>
				<Game userArray={userArray} setUserArray={setUserArray} />
			</main>
			<div id='footer'>
				<button id='resetButton' onClick={resetHandler}>
					Reset
				</button>
				<div id='winCounter'>Wins : {wins}</div>
			</div>
		</div>
	);
}

export default App;
