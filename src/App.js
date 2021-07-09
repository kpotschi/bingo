import './App.css';
import { data } from './data/sentences.js';
import { Card } from './components/Card';
import { useState, useEffect } from 'react';

function App() {
	const [userArray, setUserArray] = useState(data);
	const [RandomArray, setRandomArray] = useState([]);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};

	useEffect(() => {
		let bla = shuffleArray(userArray);
		// this line below break it, even though RandomArray is never used!
		setRandomArray(bla);
	}, []);

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
