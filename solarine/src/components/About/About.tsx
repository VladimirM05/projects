import { MutableRefObject, forwardRef } from 'react';

import about from '@/assets/images/about.png';
import soldier from '@/assets/images/soldier.png';
import tableBackground from '@/assets/images/table-background.png';

import './about.pcss';

interface AboutProps {
	ref: MutableRefObject<HTMLElement | null>;
}

interface AboutTable {
	text: string;
	num: string;
}

export const About = forwardRef<HTMLElement, AboutProps>((_, ref) => {
	const aboutTable: AboutTable[] = [
		{ text: 'Кадетские училища', num: '[01]' },
		{ text: 'Высшие военные\nучебные заведения', num: '[02]' },
		{ text: 'Частные охранные\nорганизации', num: '[03]' },
		{ text: 'Правоохранительные\nорганы', num: '[04]' },
	];

	return (
		<section
			className="about section"
			style={{ backgroundImage: `url(${about})` }}
			ref={ref}
		>
			<div className={'about-inner'}>
				<h2 className={'about-title'}>
					ПЛАТФОРМА-СИМУЛЯТОР «<span className={'highlight'}>НЕБО-ЗЕМЛЯ</span>»
				</h2>
				<div className={'about-container'}>
					<div className={'about-descr-container'}>
						<p className={'about-descr'}>
							Данная версия симулятора включает боевые
							<br />
							режимы предназначена для использования в<br />
							военных учреждениях и военно-патриотического
							<br />
							воспитания. Подходит как для военнослужащих,
							<br />
							так и для студентов военных учебных заведений.
						</p>
						<h4 className={'about-table-title'}>ДЛЯ КОГО ПОДОЙДЕТ:</h4>
					</div>
					<img className={'about-img'} src={soldier} alt={'Солдат'} />
				</div>
				<div className={'about-table-line'}>
					{aboutTable.map(i => (
						<div
							className={'about-table-column'}
							style={{ backgroundImage: `url(${tableBackground})` }}
							key={i.text}
						>
							<span className={'about-table-line-text'}>{i.text}</span>
							<br />
							<span className={'about-table-line-num'}>{i.num}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
});

About.displayName = 'About';
