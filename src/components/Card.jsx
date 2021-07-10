import React from 'react';
import '../styles/Card.css';

export const Card = ({ sentence, matchHandler, match, identifier }) => {
	let className = 'card';
	className += match ? ' match' : ' noMatch';

	if (identifier === 12) {
		return (
			<div className='square'>
				<div id={identifier} className='card joker match'>
					{'JOKER'}
				</div>
			</div>
		);
	}
	return (
		<div className='square'>
			<div onClick={matchHandler} id={identifier} className={className}>
				{sentence}
			</div>
		</div>
	);
};
