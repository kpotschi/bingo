import './App.css';
import { getRandomData } from './data/sentences.js';
import { Card } from './components/Card';
import { useState, useEffect } from 'react';
import { winHandler } from './data/winHandler.js';

function App() {
	const [userArray, setUserArray] = useState(getRandomData());
	const [wins, setWins] = useState();

	const matchHandler = (e) => {
		e.preventDefault();
		setUserArray(
			userArray.map((item, index) => {
				if (index === +e.target.id) {
					item.match = !item.match;
				}
				return item;
			})
		);
	};
	const resetHandler = () => {
		let reseter = getRandomData();
		setUserArray(reseter);
	};

	useEffect(() => {
		setWins(winHandler(userArray));
	}, [userArray]);

	return (
		<div className='App'>
			<div className='game'>
				{userArray.map((item, index) => {
					if (index === 12) {
						return (
							<Card
								key={index}
								sentence={'JOKER'}
								match={(item.match = true)}
								identifier={index}
							/>
						);
					} else {
						return (
							<Card
								matchHandler={matchHandler}
								key={index}
								sentence={item.sentence}
								match={item.match}
								identifier={index}
							/>
						);
					}
				})}
				<button onClick={resetHandler}>Reset</button>
				<div>{wins}</div>
			</div>
		</div>
	);
}

export default App;
