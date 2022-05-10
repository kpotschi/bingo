import './styles/App.css';
import getRandomData from './data/sentences';
import { Game } from './components/Game';
import { useState, useEffect } from 'react';
import { winHandler } from './data/winHandler';

function App() {
	const [cards, setCards] = useState(getRandomData());

	const [wins, setWins] = useState(0);

	const resetHandler = () => {
		setCards(getRandomData());
	};

	useEffect(() => {
		setWins(winHandler(cards));
	}, [cards]);

	return (
		<div className='App'>
			<div id='header'>
				<h1>bingo.</h1>
			</div>
			<main>
				<Game cards={cards} setCards={setCards} />
			</main>
			<div id='footer'>
				<button id='resetButton' onClick={resetHandler}>
					reset
				</button>
				<div id='winCounter'>wins : {wins}</div>
			</div>
		</div>
	);
}

export default App;
