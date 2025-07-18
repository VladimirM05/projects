import { forwardRef } from 'react';

import { Slider } from '../Slider/Slider';

import { Slide } from '@/interfaces/Slide';

import { locationSlides } from '@/store/sliderData';

import line from '@/assets/images/slider-line.svg';

import locationsBg from '@/assets/images/locations-bg.png';

import './locations.pcss';

export const Locations = forwardRef<HTMLElement | null>((_, ref) => {
	return (
		<section
			className={'locations section'}
			style={{ backgroundImage: `url(${locationsBg})` }}
			ref={ref}
		>
			<div className={'container'}>
				<div className={'locations-inner'}>
					<h2 className={'locations-title'}>
						<span className={'highlight'}>3</span> УНИКАЛЬНЫЕ ЛОКАЦИИ
					</h2>
					<Slider slides={locationSlides} line={line} />
				</div>
			</div>
		</section>
	);
});

Slider.displayName = 'Locations';
