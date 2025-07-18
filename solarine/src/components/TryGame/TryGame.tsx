import { FC } from 'react';

import tryGameBg from '@/assets/images/try-game-bg.png';
import gamePreview from '@/assets/images/game-preview.jpg';
import gameBg from '@/assets/images/game-bg.png';

import './try-game.pcss';

export const TryGame: FC = () => {
	return (
		<section
			className={'game section'}
			style={{ backgroundImage: `url(${tryGameBg})` }}
		>
			<div
				className={'game-inner'}
				style={{ backgroundImage: `url(${gameBg})` }}
			>
				<img className={'game-img'} src={gamePreview} alt={''} />
				<p className={'game-descr'}>
					Попробуйте тестовую версию в удобном формате. Подавите БпЛА в
					облегченном формате.
				</p>
				<a
					className={'game-btn'}
					href={'https://solarineoff.itch.io/heaven-earth'}
					rel={'noreferrer noopener'}
					target={'_blank'}
				>
					ПОДАВИТЬ
				</a>
			</div>
		</section>
	);
};
