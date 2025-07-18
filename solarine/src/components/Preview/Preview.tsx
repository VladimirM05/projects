import { FC } from 'react';

import crosshair from '@/assets/images/crosshair.svg';

import preview from '@/assets/images/preview.png';
import gun from '@/assets/images/gun.png';

import './preview.pcss';

interface PreviewProps {
	onScroll: (id: string) => void;
}

export const Preview: FC<PreviewProps> = ({ onScroll }) => {
	return (
		<section
			className={'preview section'}
			style={{ backgroundImage: `url(${preview})` }}
		>
			<div className={'preview-inner'}>
				<h2 className={'preview-title'}>
					СИМУЛЯТОР АНТИДРОНОВЫХ РУЖЕЙ
					<br />
					ДЛЯ ТРЕНИРОВКИ БОЕВЫХ ЗАДАЧ
				</h2>
				<div className={'game'}>
					<div className={'game-name-container'}>
						<div className={'game-name'}>
							<img
								className={'game-img'}
								src={crosshair}
								alt={'Фон названия игры'}
							/>
							<h2 className={'game-title'}>
								<span className={'highlight'}>НЕБО</span>
								<br />
								ЗЕМЛЯ
							</h2>
						</div>
						<button
							className={'contact-btn'}
							onClick={() => onScroll('section-8')}
						>
							СВЯЗАТЬСЯ
						</button>
					</div>
					<div className={'game-descr-container'}>
						<p className={'game-descr'}>
							Образовательная платформа-симулятор антидроновых ружей для
							профессионального обучения военнослужащих и для студентов военных
							учебных заведений.
						</p>
						<div className={'made-in-rus'}>
							<div className={'made-in-rus-symbols'}>
								R<br />U
							</div>
							<span className={'made-in-rus-text'}>
								СДЕЛАНО
								<br />
								ВРОССИИ
							</span>
						</div>
					</div>
				</div>
				<div className={'gun'}>
					<img className={'gun-img'} src={gun} alt={'Оружие'} />
				</div>
			</div>
		</section>
	);
};
