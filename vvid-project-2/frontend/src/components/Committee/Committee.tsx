import { FC } from 'react';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { about } from '@/store/about';
import committee from '@/assets/images/committee.jpg';
import './committee.pcss';

export const Committee: FC = () => {
	return (
		<section
			className={'about'}
			style={{ backgroundImage: `url(${committee})` }}
		>
			<div className={'container'}>
				<div className="about-inner">
					{about.map(item => (
						<AboutSection item={item} title={item.title} />
					))}
				</div>
			</div>
		</section>
	);
};
