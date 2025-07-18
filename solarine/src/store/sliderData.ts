import { Slide } from '@/interfaces/Slide';

import infrastructure from '@/assets/images/infrastructure.png';
import forest from '@/assets/images/forest.png';
import field from '@/assets/images/field.png';

import gif1 from '@/assets/images/gif-1.gif';
import gif2 from '@/assets/images/gif-2.gif';
import gif3 from '@/assets/images/gif-3.gif';
import gif4 from '@/assets/images/gif-4.gif';
import gif5 from '@/assets/images/gif-5.gif';
import gif6 from '@/assets/images/gif-6.gif';
import gif7 from '@/assets/images/gif-7.gif';

export const locationSlides: Slide[] = [
	{
		img: infrastructure,
		title: 'ИНФРАСТРУКТУРА',
		descr: [
			'Выполнение задач происходит на территории военного полигона с нефтехранилищами.',
			'Сложность миссиям придает горная местность.',
		],
	},
	{
		img: forest,
		title: 'ЛЕСНАЯ МЕСТНОСТЬ',
		descr: [
			'Действия происходят в лесной холмистой местности.',
			'Сложность миссиям придают плотная растительность и пересечённый рельеф.',
		],
	},
	{
		img: field,
		title: 'ОТКРЫТОЕ ПОЛЕ',
		descr: [
			'Действия происходят на открытой местности.',
			'Основная сложность в открытой местности, которая улучшает видимость, но ограничивает возможности укрытия.',
		],
	},
];

export const trailerSlides: Slide[] = [
	{
		img: gif1,
	},
	{
		img: gif2,
	},
	{
		img: gif3,
	},
	{
		img: gif4,
	},
	{
		img: gif5,
	},
	{
		img: gif6,
	},
	{
		img: gif7,
	},
];
