import React from 'react';
import '../styles/Card.css';

export const Card = ({ sentence, matchHandler, match, identifier }) => {
	let className = 'card';
	className += match ? ' match' : ' noMatch';

	return (
		<div onClick={matchHandler} id={identifier} className={className}>
			{sentence}
		</div>
	);
};
