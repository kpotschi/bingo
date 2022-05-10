import { FC } from 'react';
import { Card } from './Card';
import '../styles/Game.css';
import { GameProps, CardType } from '../@types/types';

export const Game: FC<GameProps> = ({ cards, setCards }) => {
	const matchHandler = (e: MouseEvent) => {
		e.preventDefault();
		const { target } = e;

		const bla = cards.map((item: CardType, index: number): CardType => {
			index === 12 && (item.match = true);

			if (index.toString() === (target as Element).id) {
				item.match ? (item.match = false) : (item.match = true);
			}
			return item;
		});

		setCards(bla);
	};

	return (
		<div className='game'>
			{cards.map((item: CardType, index: number) => {
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
