import { FC } from 'react';
import './about-list-item.pcss';

interface Content {
	content: string[];
	key: string;
}

export const AboutListItem: FC<Content> = ({ content, key }) => {
	return (
		<ul className="about-list">
			{content.map(line => (
				<li className={'about-list-item'} key={key}>
					<p className={'about-list-text'}>{line}</p>
				</li>
			))}
		</ul>
	);
};
