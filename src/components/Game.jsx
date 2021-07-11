import React from 'react';
import { Card } from './Card';
import '../styles/Game.css';

export const Game = ({ userArray, setUserArray }) => {
	const matchHandler = (e) => {
		console.log(e.target);
		e.preventDefault();
		setUserArray(
			userArray.map((item, index) => {
				index === 12 && (item.match = true);
				if (index === +e.target.id) {
					item.match = !item.match;
				}
				return item;
			})
		);
	};

	return (
		<div className='game'>
			{userArray.map((item, index) => {
				return (
					<Card
						matchHandler={matchHandler}
						key={index}
						sentence={item.sentence}
						match={item.match}
						identifier={index}
					/>
				);
			})}
		</div>
	);
};
