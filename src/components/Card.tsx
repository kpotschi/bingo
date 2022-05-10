import { FC } from 'react';
import '../styles/Card.css';
import { CardProps } from '../@types/types';
import cross from '../imgs/cross.svg';
import cat from '../imgs/cat.svg';

export const Card: FC<CardProps> = (props) => {
	const { sentence, matchHandler, match, identifier } = props;

	return (
		<div className='square'>
			{identifier === 12 ? (
				<div id={identifier} className='joker match'>
					<img className='cross' src={cross} alt='cross' />
				</div>
			) : (
				<div
					onClick={matchHandler}
					id={identifier}
					className={`card ${match ? 'match' : 'noMatch'}`}
				>
					{match && (
						<img
							className='cross'
							src={sentence === "~there's a cat~" ? cat : cross}
							alt='cross'
						/>
					)}
					<div className='card--text'> {sentence} </div>
				</div>
			)}
		</div>
	);
};
