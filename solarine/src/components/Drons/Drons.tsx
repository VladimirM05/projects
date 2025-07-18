import { forwardRef, MutableRefObject } from 'react';

import dronsBg from '@/assets/images/drons-bg.jpg';
import dron1 from '@/assets/images/dron-1.png';
import dron2 from '@/assets/images/dron-2.png';

import './drons.pcss';

interface DronsProps {
	ref: MutableRefObject<HTMLElement | null>;
}

interface Drons {
	title: string;
	text: string;
	img: string;
}

const dronsArray = [
	{
		title: 'VTOL',
		text: 'В симуляторе представлены БПЛА самолетного типа.\nДанный вид является разведывательным элементом. После\nтакого БПЛА начинается атака с помощью других БПЛА.',
		img: dron1,
	},
	{
		title: 'FPV, DJI',
		text: 'Помимо БПЛА самолетного типа, в симуляторе представлены\nатакующие. В их число входит самые популярные: FPV и DJI\nтипов. Данный тип является более опасным и подвергает вас\nнаибольшему риску.',
		img: dron2,
	},
];

export const Drons = forwardRef<HTMLElement, DronsProps>((_, ref) => {
	return (
		<section
			className={'drons section'}
			style={{ backgroundImage: `url(${dronsBg})` }}
			ref={ref}
		>
			<div className={'container'}>
				<div className={'drons-inner'}>
					{dronsArray.map((item, i) => (
						<div className={`dron dron-${i + 1}`} key={item.title}>
							<div className={'dron-container'}>
								<h2 className={'dron-title'}>{item.title}</h2>
								<p className={'dron-descr'}>{item.text}</p>
							</div>
							<img className={'dron-img'} src={item.img} alt={item.title} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
});

Drons.displayName = 'Drons';
