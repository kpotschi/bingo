import './App.css';
import { data } from './data/sentences.js';
import { Card } from './components/Card';
import { useState, useEffect } from 'react';

function App() {
	const [userArray, setUserArray] = useState(data);

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

	return (
		<div className='App'>
			<div className='game'>
				{userArray.map((item, index) => (
					<Card
						matchHandler={matchHandler}
						key={index}
						sentence={item.sentence}
						match={item.match}
						identifier={index}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
