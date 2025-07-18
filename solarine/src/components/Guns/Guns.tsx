import { forwardRef, MutableRefObject } from 'react';

import gunsBg from '@/assets/images/guns-bg.png';
import gun1 from '@/assets/images/gun-1.png';
import gun2 from '@/assets/images/gun-2.png';

import './guns.pcss';

interface GunsProps {
	ref: MutableRefObject<HTMLElement | null>;
}

interface Drons {
	title: string;
	text: string;
	img: string;
}

const gunsArray = [
	{
		title: 'АНТИДРОНОВОЕ РУЖЬЕ',
		text: 'В симуляторе представлено антидроновое ружье, предназначенное\nдля подавления управления беспилотниками. Оно глушит\nрадиосигналы, GPS и каналы связи, в результате чего дрон теряет связь\nс оператором, зависает, садится или возвращается на точку старта.',
		img: gun1,
	},
	{
		title: 'ПАРС',
		text: 'Рабочие частоты 0,9 ГГц, 1,6 ГГц, 2,4 ГГц, 5,2 ГГц, 5,8 ГГц.\nПриводится в действие одной кнопкой. Непрерывная работа\nдо 4х часов. Высокая дальность действия — до 1500 метров',
		img: gun2,
	},
];

export const Guns = forwardRef<HTMLElement, GunsProps>((_, ref) => {
	return (
		<section
			className={'guns section'}
			style={{ backgroundImage: `url(${gunsBg})` }}
			ref={ref}
		>
			<div className={'container'}>
				<div className={'guns-inner'}>
					{gunsArray.map((item, i) => (
						<div className={`gun gun-${i + 1}`} key={item.title}>
							<img className={'gun-img'} src={item.img} alt={item.title} />
							<div className={'gun-container'}>
								<h2 className={'gun-title'}>{item.title}</h2>
								<p className={'gun-descr'}>{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
});

Guns.displayName = 'Guns';
