import { MutableRefObject, forwardRef } from 'react';

import triangle from '@/assets/images/triangle.svg';

import about from '@/assets/images/about.png';
import trailer from '@/assets/images/trailer.png';
import textLogo from '@/assets/images/text-logo.png';

import './trailer.pcss';

interface TrailerProps {
	ref: MutableRefObject<HTMLElement | null>;
}

export const Trailer = forwardRef<HTMLElement, TrailerProps>((_, ref) => {
	return (
		<section
			className={'trailer section'}
			style={{ backgroundImage: `url(${about})` }}
			ref={ref}
		>
			<div className={'container'}>
				<div className={'trailer-inner'}>
					<h2 className={'trailer-title'}>ТРЕЙЛЕР</h2>
					<p className={'trailer-descr'}>
						В видеоролике демонстрируется работа с<br />
						антидроновым ружьем «<span className={'highlight'}>ПАРС</span>» по
						подавлению
						<br />
						БПЛА самолетного типа «
						<span className={'highlight'}>ЛЕЛЕКА-100</span>
						».
						<br />
					</p>
					<div
						className={'trailer-video'}
						style={{ backgroundImage: `url(${trailer})` }}
					>
						<button className={'trailer-video-btn'}>
							<img
								src={triangle}
								alt={'Треугольник кнопки Play'}
								className={'trailer-video-btn-triangle'}
							/>
						</button>
						<img
							src={textLogo}
							alt={'Логотип Solarine'}
							className={'text-logo'}
						/>
					</div>
				</div>
			</div>
		</section>
	);
});

Trailer.displayName = 'Trailer';
