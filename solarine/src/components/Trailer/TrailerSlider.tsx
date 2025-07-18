import { forwardRef } from 'react';

import { Slider } from '../Slider/Slider';

import { Slide } from '@/interfaces/Slide';

import { trailerSlides } from '@/store/sliderData';

import locationsBg from '@/assets/images/locations-bg.png';

import './trailer.pcss';

export const Trailer = forwardRef<HTMLElement | null>((_, ref) => {
	return (
		<section
			className={'trailer section'}
			style={{ backgroundImage: `url(${locationsBg})` }}
			ref={ref}
		>
			<div className={'container'}>
				<div className={'trailer-inner'}>
					<h2 className={'trailer-title'}>ТРЕЙЛЕР</h2>
					<p className={'trailer-descr'}>
						В видеороликах демонстрируется подавление
						<br />
						разведывательного БпЛА
						<span className={'highlight'}> DJI Mavic 2 pro</span>
					</p>
					<Slider slides={trailerSlides} />
				</div>
			</div>
		</section>
	);
});

Slider.displayName = 'Trailer';
