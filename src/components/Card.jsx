import React from 'react';
import '../styles/Card.css';
import cross from '../imgs/cross.svg';
import cat from '../imgs/cat.svg';

export const Card = ({ sentence, matchHandler, match, identifier }) => {
	let className = 'card';
	className += match ? ' match' : ' noMatch';

	if (identifier === 12) {
		return (
			<div className='square'>
				<div id={identifier} className='card joker match'>
					<img className='cross' src={cross} alt='cross' />
				</div>
			</div>
		);
	}
	return (
		<div className='square'>
			<div onClick={matchHandler} id={identifier} className={className}>
				{match && (
					<img
						className='cross'
						src={sentence === "~there's a cat~" ? cat : cross}
						alt='cross'
					/>
				)}
				<div className='card--text'>{sentence}</div>
			</div>
		</div>
	);
};
