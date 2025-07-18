import { FC } from 'react';
import { AboutListItem } from '@/components/AboutListItem/AboutListItem';
import { AboutItems } from '@/interfaces/AboutItems';
import './about-section.pcss';

interface AboutSection {
	item: AboutItems;
	title: string;
}

export const AboutSection: FC<AboutSection> = ({ item, title }) => {
	return (
		<article className={'about-section'} key={title}>
			<h2 className={'about-title'}>{title}</h2>
			<div className={'about-content'}>
				{item.content.map(textItem => (
					<>
						<h4 className={'about-subtitle'}>{textItem.subtitle}</h4>
						<AboutListItem content={textItem.text} key={textItem.subtitle} />
					</>
				))}
			</div>
		</article>
	);
};
