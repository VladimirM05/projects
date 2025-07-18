import { forwardRef, MutableRefObject } from 'react';

import modes from '@/assets/images/modes.png';
import cardBg from '@/assets/images/card-bg.png';
import lesson from '@/assets/images/lesson.png';
import coach from '@/assets/images/coach.png';
import exam from '@/assets/images/exam.png';
import statistics from '@/assets/images/statistics.png';

import './modes.pcss';

interface ModesProps {
	ref: MutableRefObject<HTMLElement | null>;
}

const modesCards = [
	{
		title: 'Теория',
		text: 'Режим с теоретической базой, позволяющий\nбыстро изучить лекционный материал в игровом\nформате.',
		num: '01',
		img: lesson,
		alt: 'Урок',
	},
	{
		title: 'ПРАКТИКА',
		text: 'Режим, который объединяет в себе теоретический\nаспект и позволяет проверить свои навыки в\nреальной ситуации.',
		num: '02',
		img: coach,
		alt: 'Тренер',
	},
	{
		title: 'ЭКЗАМЕН',
		text: 'Режим, объединяющий в себе теоретические и\nпрактический элементы и позволяющий\nпровести оценку.',
		num: '03',
		img: exam,
		alt: 'Экзамен',
	},
	{
		title: 'СТАТИСТИКА',
		text: 'Режим позволяет в удобном формате получить\nотчет о подготовке пользователя, проходя\nдополнительные задания.',
		num: '04',
		img: statistics,
		alt: 'Статистика',
	},
];

export const Modes = forwardRef<HTMLElement, ModesProps>((_, ref) => {
	return (
		<section
			className={'modes section'}
			style={{ backgroundImage: `url(${modes})` }}
			ref={ref}
		>
			<div className={'container'}>
				<div className={'modes-inner'}>
					<h2 className={'modes-title'}>ОСНОВНЫЕ РЕЖИМЫ СИМУЛЯТОРА</h2>
					<div className={'about-cards'}>
						{modesCards.map(card => (
							<div
								className={'about-card'}
								style={{ backgroundImage: `url(${cardBg})` }}
								key={card.title}
							>
								<h3 className={'about-card-title'}>{card.title}</h3>
								<p className={'about-card-descr'}>{card.text}</p>
								<div className={'about-card-container'}>
									<span className={'about-card-num'}>{card.num}</span>
									<img
										className={'about-card-img'}
										src={card.img}
										alt={card.alt}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
});

Modes.displayName = 'Modes';
