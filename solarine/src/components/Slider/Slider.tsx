import { FC, useState, useEffect } from 'react';

import { Slide } from '@/interfaces/Slide';

import arrow from '@/assets/images/arrow.svg';

import './slider.pcss';

interface Slider {
	slides: Slide[];
	line?: string;
}

export const Slider: FC<Slider> = ({ slides, line }) => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [fade, setFade] = useState<boolean>(false);
	const [targetIndex, setTargetIndex] = useState<number | null>(null);

	const nextSlide = () => {
		const next = (currentIndex + 1) % slides.length;
		triggerFade(next);
	};

	const prevSlide = () => {
		const prev = (currentIndex - 1 + slides.length) % slides.length;
		triggerFade(prev);
	};

	const triggerFade = (index: number) => {
		setFade(true);
		setTargetIndex(index);
	};

	useEffect(() => {
		if (fade && targetIndex !== null) {
			const timeout = setTimeout(() => {
				setCurrentIndex(targetIndex);
				setFade(false);
				setTargetIndex(null);
			}, 200);
			return () => clearTimeout(timeout);
		}
	}, [fade, targetIndex]);

	const currentSlide: Slide = slides[currentIndex];

	return (
		<div className={'slider'}>
			<img
				className={`slider-img  ${fade === true ? 'fade-out' : ''}`}
				src={currentSlide.img}
				alt={currentSlide.title}
			/>
			<div className={'slider-container'}>
				{line && (
					<h4 className={`slider-title ${fade === true ? 'fade-out' : ''}`}>
						{currentSlide.title}
					</h4>
				)}
				{line && <img className={'slider-line'} src={line} alt={'Линия'} />}
				{line && (
					<div className={`slider-descr ${fade === true ? 'fade-out' : ''}`}>
						{currentSlide.descr?.map(p => (
							<p className={'slider-text'} key={p}>
								{p}
							</p>
						))}
					</div>
				)}
				<div className={'slider-status-bar'}>
					{slides.map((_, i) => (
						<div
							className={`slider-indicator ${
								i === currentIndex ? 'active' : ''
							}`}
							key={i}
						/>
					))}
				</div>
				<div className={'slider-controls'}>
					<div className={'slider-counter'}>
						<span className={'slider-counter-num'}>{`0${
							currentIndex + 1
						}`}</span>
						<span className={'slider-counter-slash disactive'}>/</span>
						<span
							className={'slider-counter-num disactive'}
						>{`0${slides.length}`}</span>
					</div>
					<div className={'slider-btns'}>
						<button className={'slider-btn'} onClick={prevSlide}>
							<img
								className={'slider-btn-prev-img'}
								src={arrow}
								alt={'Стрелка назад'}
							/>
						</button>
						<button className={'slider-btn'} onClick={nextSlide}>
							<img
								className={'slider-btn-next-img'}
								src={arrow}
								alt={'Стрелка вперед'}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
